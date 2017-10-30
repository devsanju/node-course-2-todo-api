// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDb server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("59f68689307624b4bc2cc2fc")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // @see https://docs.mongodb.com/manual/reference/operator/update/
  
  db.collection('Users').findOneAndUpdate({
    name: "Jenny"
  }, {
    $set: {
      name: "Kelly"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //db.close();
});
