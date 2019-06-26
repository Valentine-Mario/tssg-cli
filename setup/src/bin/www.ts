#!/usr/bin/env node

import http from 'http';
const app=require('../app.ts')

var port = normalizePort(process.env.PORT || '3001');
app.set('port', port);
var server = http.createServer(app);

  

  server.listen(port, function(){
    console.log(`listening on port ${port}`)
  });
  


function normalizePort(val:any) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  }
  
