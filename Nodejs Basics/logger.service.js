const winston = require('winston');

const dateformat = ()=>
{
    return new Date(Date.now()).toLocaleString();


}

class loggerservice {
    constructor(route){
        this.route=route;
        const logger = winston.createLogger({
            level: 'info',
            format: winston.format.json(),
            defaultMeta: { service: 'user-service' },
            transports: [
              new winston.transports.console(),  
              //new winston.transports.File({ filename: 'error.log', level: 'error' }),
              new winston.transports.File({ filename: 'combined.log' }),
            ],
          });
          
    }
}

