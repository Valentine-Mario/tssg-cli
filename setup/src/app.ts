import express, {Application, Request, Response, NextFunction} from 'express';

var app:Application=express();
var indexRouter = require('./routes/index.ts');

app.use('/', indexRouter)
module.exports = app;
