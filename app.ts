// import createError from "http-errors";
// import opn from "opn";
// import logger from "morgan";
import { apiRouter } from "./routers/api-router";

import express = require("express")

class App {
  public express

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    this.express.use("/", apiRouter);
  }
}

export default new App().express;

// const app = express()

// app.use(logger('dev'))
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// // app.use(express.static(path.join(__dirname, 'public')))
// app.use('/',apiRouter)

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404))
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {}

//   // render the error page
//   res.status(err.status || 500)
//   res.render('error')
// })
