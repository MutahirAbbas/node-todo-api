const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Mutahir1',{ useNewUrlParser: true }, (err, db)=>{
  if(err){
    return  console.log("Unable to connect to MongoDB Server");
  }
  console.log("Connected to MongoDB Server");

db.collection('test2').findOneAndUpdate({
  _id: new ObjectID('5c4ee0b35aa633173099c360')
},{
  $set:{
    text:'Ali'
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
})

db.close();


});
