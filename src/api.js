const express = require('express');
require('express-async-errors');

const login = require('./routes/authRoute');

const user = require('./routes/userRoute');

const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');

// ...

const app = express();

app.use(express.json());

app.use('/login', login);

app.use('/user', user);

app.use(errorHandlerMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
