const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
//  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

const miFuncion = val => {
    if (typeof val === "number"){
        return val
    }
    throw new Error ("El valor debe ser de tipo numero")
}

const numero = "6";

try {
    logger.info ("El resultado se esta ejecutando correctamente")
    const numb = miFuncion(numero)
    
} catch (e) {
    logger.error(`${e}`)
}



