const ndMon = require('./numeros');
const logplis = require('logplease');
const Logger = require('logplease');
const logger = Logger.create('utils');


let mensaje = (num) => {
    if (ndMon.esPar(num)== true){
    logger.info("El numero es par")
    } 
    else 
    logger.error("no es par")
}

mensaje(101)