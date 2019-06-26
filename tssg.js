#!/usr/bin/env node

// A simple cli instance to create a typescript setup for server side using ts-Node, and express js
var program = require('commander');
var readline = require('readline')
const fse = require('fs-extra')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var path = require('path')  
const TEMPLATE_DIR = path.join(__dirname,  'setup')

program
  .version('0.1.0', '-v, --version')
  .usage('[options] [dir]')
  .option('-c, --create [type]', 'add directory [create]', 'app')
  .parse(process.argv);

  
if(program.create) {
  try{
    fse.copySync(TEMPLATE_DIR, `./${`-%s create`, program.create}`)
    console.log(`create ${`-%s create`, program.create}/package.json`)
    console.log(`created ${`-%s create`, program.create}/tsconfig.json`)
    console.log(`created ${`-%s create`, program.create}/src/app.ts`)
    console.log(`created ${`-%s create`, program.create}/src/bin/www.ts`)
    console.log(`created ${`-%s create`, program.create}/src/routes/index.ts`)
    console.log(`cd ${`-%s create`, program.create}`);
    console.log(`npm install`)
    console.log(`npm run build to run build`)
    console.log(`npm start to start typescript app`)
    console.log(`npm run dev to run javascript after build`)
  }catch(err){
    console.log(err)
  }    
    rl.close();
}

