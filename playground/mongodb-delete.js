const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Mutahir1',{ useNewUrlParser: true }, (err, db)=>{
  if(err){
    return  console.log("Unable to connect to MongoDB Server");
  }
  console.log("Connected to MongoDB Server");

//Delete Many
// db.collection('test2').deleteMany({age: '22'}).then((result)=>{
//   console.log(result);
// });

//DeleteOne
// db.collection('test2').deleteOne({ text:'john doe' }).then((result)=>{
//   console.log(result);
// })

//findOneAndDelete
db.collection('test2').findOneAndDelete({text:'Alex'}).then((result)=>{
  console.log(result);
})
db.close();


});
