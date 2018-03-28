const { MongoClient } = require('mongodb');
global.Promise = require('bluebird');

const promise = function () {
  return new Promise((resolve) => {
    const client = MongoClient.connect(process.env.SOURCE);

    console.log(`Connect to ${process.env.SOURCE}/${process.env.SOURCEDB}`);
    resolve(client);
  })
    .then(client =>
      new Promise((resolve) => {
        const db = client.db(process.env.SOURCEDB);
        resolve(db);
      }))
    .then(db =>
      new Promise((resolve) => {
        const collection = db.collection(process.env.SOURCECOLL);
        console.log(`Use collection ${process.env.SOURCECOLL}`);
        resolve(collection);
      }))
    .then(collection =>
      new Promise((resolve) => {
        const docs = collection.insertMany([
          {
            name: 'David',
            age: 12
          },
          {
            name: 'Loris',
            age: 15
          },
          {
            name: 'Sandra',
            age: 20
          }
        ]);
        resolve(docs);
      }))
    .then((docs) => {
      console.log(docs);
    })
    .catch((reason) => {
      console.error(reason);
    });
};

// promise();
