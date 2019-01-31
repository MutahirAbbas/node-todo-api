const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Pratice', (err, db)=>{
  if(err){
  return  console.log("Unable to connect");
  }
  console.log("Connected to MongoDB");



  // db.collection('Pratice1').insertOne({
  //   text:'Insert Data',
  //   location:'CA',
  //   completed: 'false'
  // },(err, result)=>{
  // if(err){
  // return  console.log('Unable to connect', err);
  // }
  // console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });

// db.collection('Pratice1').find({completed:'false'}).toArray().then((docs)=>{
//   console.log(docs);
// },(err)=>{
//   console.log("Unable to fetch Data", err);
// })

// db.collection('Pratice1').findOneAndDelete({location:'LA'}).then((result)=>{
//   console.log(result);
// })

db.collection('Pratice1').findOneAndUpdate({
  _id: new ObjectID('5c4fe8016bc106102091455a')
},{
  $set:{
    text:'Alex',
    location:'LA',
    completed:'true'
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
})

  db.close()
});
