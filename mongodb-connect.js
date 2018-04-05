const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err)
    {
        console.log('Unable to connect server');
    }
    console.log('connected to server');
    
    // db.collection('Todos').insertOne({
    //     text: 'hello',
    //     completed: false
    // },(err, result) => {
    //     assert.equal(null, err);

    //     if(err){
    //         return console.log('Unable inser to todo');
    //     }
    //     console.log(JSON.stringify(result), undefined, 2);
    // });

// db.collection('Users').insertOne({
//     name: 'vipul',
//     email: 'vipul@gmail.com',
//     location: 'thane'
// },
//     (err, result) => {
//   if(err){
//       console.log('unable to insters uerinfos', err);
//       console.log('succesful inserted userinfos');
//       console.log(JSON.stringify(result));
//   }
// });

db.collection('Users').find().toArray().then(docs => {
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));
}, (err) => {
    if(err){
        console.log('Cant get the collectiong', err);
    }
})


    db.close();
});