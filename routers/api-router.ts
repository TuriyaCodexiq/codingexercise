export const apiRouter = require('express').Router()
import { getSunriseSunsetInfo } from '../controllers/api-controller'

apiRouter.route('/')
  .get(getSunriseSunsetInfo)
