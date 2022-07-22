const express = require('express');

const loginControllers = require('./controllers/loginControllers');

// ...

const app = express();

app.use(express.json());

app.post('/login', loginControllers.loginController);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
