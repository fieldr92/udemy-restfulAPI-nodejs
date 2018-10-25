const EventEmitter = require('events');

const url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    // e.g. Send HTTP request
    console.log(message);   
    // Raise an event
    this.emit('messageLogged', { id: 1, url: 'http://' });
  }
}

module.exports = Logger;