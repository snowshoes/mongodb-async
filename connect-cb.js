require('dotenv').config();
const { MongoClient } = require('mongodb');

let _db;

const connectDB = async (callback) => {
  try {
    MongoClient.connect(process.env.SOURCE, (err, client) => {
      const db = client.db(process.env.SOURCEDB);
      _db = db;
      return callback(err);
    });
  } catch (error) {
    throw error;
  }
};

const getDB = () => _db;

module.exports = {
  connectDB,
  getDB
};
