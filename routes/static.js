const express = require('express');
const staticRouter = express.Router();

staticRouter.get('/',express.static('public'));

module.exports = staticRouter;