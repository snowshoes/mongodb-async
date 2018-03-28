require('./config/config');
const MongoDB = require('./connect-cb');

MongoDB.connectDB(async (err) => {
  if (err) throw err;
  const db = MongoDB.getDB();
  console.log(db);
  const accounts = db.collection(process.env.SOURCECOLL);
});
