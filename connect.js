require('dotenv').config();
const { MongoClient } = require('mongodb');

let _db;

const connectDB = async () => {
  const client = await MongoClient.connect(process.env.SOURCE);

  const db = client.db(process.env.SOURCEDB);
  console.log(`connect to ${process.env.SOURCE}/${process.env.SOURCEDB}`);
  return db;
};

const getDB = () => _db;

module.exports = {
  connectDB,
  getDB
};
