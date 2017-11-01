const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// do not get docs back
// Todo.remove({}).then((result) => {
//   console.log(result)
// });

// Todo.findOneAndRemove({_id: '59f9346f9e3a4d90ee92e56c'}).then((result) => {
//   console.log(result)
// });

// Todo.findByIdAndRemove('59f9346f9e3a4d90ee92e56c').then((todo) => {
//   console.log(todo);
// });
