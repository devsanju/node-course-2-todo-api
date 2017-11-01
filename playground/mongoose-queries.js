const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
// const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59f712176bbdb425c43a9cb5';

if(!ObjectID.isValid(id)) {
  console.log('Id not valid');
} else {
  User.findById(id).then((user) => {
    if(!user) {
      return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2)); // 'User by Id', user
  }).catch((e) => {
    console.log(e);
  })
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => {
//   console.log(e);
// })
