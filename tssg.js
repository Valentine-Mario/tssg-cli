#!/usr/bin/env node

var program = require('commander');
var readline = require('readline')
const fse = require('fs-extra')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

program
  .version('0.1.0', '-v, --version')
  .usage('[options] [dir]')
  .option('-c, --create [type]', 'add directory [create]', 'app')
  .parse(process.argv);

  
if(program.create) {
  try{
    fse.copySync('./setup', `./${`-%s create`, program.create}`)
    console.log(`cd ${`-%s create`, program.create}`);
    console.log(`npm install`)
  }catch(err){
    console.log(err)
  }    
    rl.close();
}

