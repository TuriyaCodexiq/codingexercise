"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = require('express').Router();
const { getSunriseSunsetInfo } = require('../controllers/api-controller');
exports.apiRouter.route('/')
    .get(getSunriseSunsetInfo);
module.exports = exports.apiRouter;
//# sourceMappingURL=api-router.js.map