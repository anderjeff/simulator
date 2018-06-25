import * as winston from "winston";

export class logger {
    private static _minLevel = 'info';
    private static _log = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        transports: [
            new winston.transports.File({filename: 'error.log', level: 'error'}),
            new winston.transports.File({filename: 'combined.log' })
        ]
    });
    
    static logMessage(level: string, message: string){
        this._log.log(level, message);
    }     
}
