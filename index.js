require('./config/config');
const { connectDB } = require('./connect');

const getCollection = async () => {
  const db = await connectDB();
  // console.log(db);
  const collection = await db.collection(process.env.SOURCECOLL);
  // console.log(collection);
  return collection;
};

const getLastest = async () => {
  const collection = await getCollection();
  const latest = await collection
    .find({
    })
    .sort({
      _id: -1
    })
    .limit(1)
    .toArray();
  console.log(latest[0]);
  return latest[0];
};

getLastest();
