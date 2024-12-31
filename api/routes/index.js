const express = require('express');
const mainRouter = express.Router();
const routerLogin = require('./login/router');

mainRouter.use('/auth', routerLogin);
