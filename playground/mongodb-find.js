const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Mutahir1',{ useNewUrlParser: true }, (err, db)=>{
  if(err){
    return  console.log("Unable to connect to MongoDB Server");
  }
  console.log("Connected to MongoDB Server");

// db.collection('test2').insertOne({
//   text: 'Ali',
//   age:'22',
//   location:  "Lahore",
//   completed: false
// }, (err, result)=>{
//   if(err){
//     return console.log("Unable to insert TODO", err);
//   }
//
//   console.log(JSON.stringify(result.ops, undefined, 2));
// });
//
// db.close();

db.collection('test2').find({text: 'Ali'}).toArray().then((docs)=>{
  console.log('test2');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err)=>{
  console.log('Unable to fetch data', err);
})
});
