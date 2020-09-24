const express = require('express');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const ejs = require("ejs");
const pdf = require("html-pdf");
const morgan = require('morgan');
const helmet = require('helmet');

const { swaggerDocument, options } = require('./swagger');

const { baseURL } = require('../config/index');

// route
const usersRoute = require('./routers/users');
const operationsRouter = require('./routers/opetations');
const comptesRouter = require('./routers/comptes');
const foldersRouter = require('./routers/folders');
const authRoute = require('./routers/auth');

const verifyToken = require('./middleware/auth');
const { catchAll, notFound } = require('./validator/error');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../../build'))).set('static', path.join(__dirname, 'static'));
app.use(express.static(path.join(__dirname, '../../storage'))).set('static', path.join(__dirname, 'static'));
// app.use(express.static(path.join(__dirname, '../../public'))).set('static', path.join(__dirname, 'static'));
// app.use(express.static(path.join(__dirname, './public'))).set('static', path.join(__dirname, 'static'));
// app.use('/static', express.static(__dirname + '/public'));
  
app.get("/generateReport", (req, res) => {
	ejs.renderFile(path.join(__dirname, '../../storage/tamplete/', "index.ejs"), {
        baseURL,
    }, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            let options = {
                // "height": "11.25in",
                // "width": "8.5in",
                "height": "11.25in",
                "width": "8.5in",
                "header": {
                    "height": "2mm",
                },
                "footer": {
                    "height": "2mm",
                },

            };
            pdf.create(data, options).toFile("./storage/pdfs/report.pdf", function (err, data) {
                if (err) {
                  console.log({ err });
                    res.send(err);
                } else {
                  console.log("File created successfully");
                  res.send("File created successfully");
                }
            });
        }
    });
})

app.post("/api/generateReport", (req, res) => {
  console.log(req.body);
	ejs.renderFile(path.join(__dirname, '../../storage/tamplete/', "index.ejs"), {
        baseURL,
        ...req.body,
    }, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            let options = {
                // "height": "11.25in",
                // "width": "8.5in",
                "height": "11.25in",
                "width": "8.5in",
                "header": {
                    "height": "2mm",
                },
                "footer": {
                    "height": "2mm",
                },

            };
            pdf.create(data, options).toFile("./storage/pdfs/report.pdf", function (err, data) {
                if (err) {
                  console.log({ err });
                    res.send(err);
                } else {
                  console.log("File created successfully");
                  res.send({ data });
                }
            });
        }
    });
})

app.get('/', (_, res) => {
  res.json({ message: 'It works!' });
});

app.use('/api/docs', swaggerUi.serve);
app.get('/api/docs', swaggerUi.setup(swaggerDocument, false, options, '.swagger-ui .topbar { background-color: red }'));

app.use('/api/login', authRoute);

app.use('/api/users', verifyToken, usersRoute);

app.use('/api/operations', verifyToken, operationsRouter);

app.use('/api/comptes', verifyToken, comptesRouter);

app.use('/api/folders', verifyToken, foldersRouter);

app.use(notFound);

app.use(catchAll);

module.exports = app;
