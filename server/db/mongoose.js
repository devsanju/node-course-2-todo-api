var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
// mongoose.createConnection('mongodb://localhost:27017/TodoApp');
mongoose.connection.openUri('mongodb://localhost:27017/TodoApp')
  .once('open', () => {})
  .on('error', (error) => {
    console.warn('Warning', error);
  });

  module.exports = {mongoose};
