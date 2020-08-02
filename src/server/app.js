const express = require('express');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');

const { swaggerDocument, options } = require('./swagger');

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
