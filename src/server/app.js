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
const auditRouter = require('./routers/audit');
const comptesRouter = require('./routers/comptes');
const foldersRouter = require('./routers/folders');
const authRoute = require('./routers/auth');

const verifyToken = require('./middleware/auth');
const { catchAll, notFound } = require('./validator/error');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use(express.static(path.join(__dirname, '../../build'))).set('static', path.join(__dirname, 'static'));
app.use(express.static(path.join(__dirname, '../../storage'))).set('static', path.join(__dirname, 'static'));
// app.use(express.static(path.join(__dirname, '../../public'))).set('static', path.join(__dirname, 'static'));
// app.use(express.static(path.join(__dirname, './public'))).set('static', path.join(__dirname, 'static'));
// app.use('/static', express.static(__dirname + '/public'));


const optionsFDF = {
  // Export options
  "directory": "/tmp",       // The directory the file gets written into if not using .toFile(filename, callback). default: '/tmp'
 
  // Papersize Options: http://phantomjs.org/api/webpage/property/paper-size.html
  // "height": "10.5in",        // allowed units: mm, cm, in, px
  // "width": "8in",            // allowed units: mm, cm, in, px
  // - or -
  "format": "A4",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
  "orientation": "portrait", // portrait or landscape
 
  // Page options
  // "border": "0",             // default is 0, units: mm, cm, in, px
  // - or -
  "border": {
    "top": "0.8cm",            // default is 0, units: mm, cm, in, px
    "right": "1.32cm",
    "bottom": "0.8cm",
    "left": "1.32cm"
  },
 
  paginationOffset: 1,       // Override the initial pagination number
  "header": {
    "height": "10px",
    // "contents": "<img src='" + ulr + "' style='height: 21px; width: 500px' />",
    // "contents": '<div style="text-align: center;">Author: Marc Bachmann</div>'
    // "contents": '<div style="color: red; height: 21px;"><img src="http://localhost:5000/tamplete/img/bandeausitepieddepag_0.png" style="height: 20px; width: 575px;"></div>',
  },
  "footer": {
    "height": "25px",
    // "contents": {
    //   // first: 'Cover page',
    //   // bandeausitepieddepag_0
    //   // default: '<div style="color: red; height: 35px;"><img src="http://localhost:5000/tamplete/img/bandeausitepieddepag_0.png" style="height: 30px; width: 580px;"></div>',
    //   // 2: 'Second page', // Any page number is working. 1-based index
    //   // default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
    //   // last: 'Last Page' // width: 30px;
    //   // last: '<div style="color: red; height: 35px;"></div>', // <img src="http://localhost:5000/tamplete/img/bandeausitepieddepag_0.png" style="height: 14.5px;">
    //   // first: footer,
    //   // default: footer,
    // }
  },
 
 
  // Rendering options
  // "base": "file:///home/www/your-asset-path", // Base path that's used to load files (images, css, js) when they aren't referenced using a host
 
  // Zooming option, can be used to scale images if `options.type` is not pdf
  "zoomFactor": "1", // default is 1
 
  // File options
  "type": "pdf",             // allowed file types: png, jpeg, pdf
  "quality": "75",           // only used for types png & jpeg
 
  // Script options
  // "phantomPath": "./node_modules/phantomjs/bin/phantomjs", // PhantomJS binary which should get downloaded automatically
  // "phantomArgs": [], // array of strings used as phantomjs args e.g. ["--ignore-ssl-errors=yes"]
  // "script": '/url',           // Absolute path to a custom phantomjs script, use the file in lib/scripts as example
  "timeout": 30000,           // Timeout that will cancel phantomjs, in milliseconds
 
  // Time we should wait after window load
  // accepted values are 'manual', some delay in milliseconds or undefined to wait for a render event
  "renderDelay": 1000,
 
  // HTTP Headers that are used for requests
  // "httpHeaders": {
  //   // e.g.
  //   "Authorization": "Bearer ACEFAD8C-4B4D-4042-AB30-6C735F5BAC8B"
  // },
 
  // To run Node application as Windows service
  "childProcessOptions": {
    "detached": true
  }
 
  // HTTP Cookies that are used for requests
  // "httpCookies": [
  //   // e.g.
  //   {
  //     "name": "Valid-Cookie-Name", // required
  //     "value": "Valid-Cookie-Value", // required
  //     "domain": "localhost",
  //     "path": "/foo", // required
  //     "httponly": true,
  //     "secure": false,
  //     "expires": (new Date()).getTime() + (1000 * 60 * 60) // e.g. expires in 1 hour
  //   }
  // ]
 
}

app.post("/api/generateReport", (req, res) => {
  console.log(req.body);
	ejs.renderFile(path.join(__dirname, '../../storage/tamplete/', "index.ejs"), {
        baseURL,
        ...req.body,
        datasets: [{
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          "#95a5a6",
          "#9b59b6",
          "#f1c40f",
          "#e74c3c",
          "#34495e"
        ],
        data: [12, 19, 3, 17, 28, 24, 7]
      }],
    }, (err, data) => {
        if (err) {
          console.log("err =====> File created Field", err);
          res.send({ err });
        } else {
            pdf.create(data, optionsFDF).toFile("./storage/pdfs/report.pdf", function (err, data) {
                if (err) {
                  console.log("File created Field");
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

app.use('/api/comptes', verifyToken, comptesRouter);

app.use('/api/folders', verifyToken, foldersRouter);

app.use('/api/audit', verifyToken, auditRouter);

app.use(notFound);

app.use(catchAll);

module.exports = app;
