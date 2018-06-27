import log4js = require('log4js');
log4js.configure({
    appenders: {fileAppender: {type: 'file', filename: 'app.log'} },
    categories: {default: {appenders: ['fileAppender'], level: 'info'} }
});

export class Utilities {
    static logger = log4js.getLogger('fileAppender');  
}
