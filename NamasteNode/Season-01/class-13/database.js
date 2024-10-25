const { MongoClient } = require("mongodb");

const url = "mongodb+srv://sauravbedwal1234:LAxU7xXSS9gO09WJ@namastenodesauravbedwal.vwabz.mongodb.net/";

const client = new MongoClient(url);

const dbName = 'HelloWorld';

async function main() {
    // Use connect method to connect to the server

    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');
  
    // the following code examples can be pasted here...
  
    // Insert Data
//     const data = [{
//         firstname: "Deepika",
//         lastname: "Padukone",
//         city: "Mumbai",
//         phoneNumber: "1234567890" 
//     },

//     {
//         firstname: "Ranveer",
//         lastname: "Singh",
//         city: "Bombay",
//         phoneNumber: "1212343456" 
//     },
// ]

//     const insertResult = await collection.insertMany(data);
//     console.log('Inserted documents =>', insertResult);

    // Read
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
    
    // Update
    const updateQuery = {
    firstname: "Ranveer",
    lastname: "Singh"
}

    const updateResult = await collection.updateOne(updateQuery, { $set: { city: "Delhi" } });
    console.log('Updated documents =>', updateResult);

  // Delete
//   const deleteQuery = {
//     firstname: "Ranveer",
//     lastname: "Singh",
//     city: "Bombay",
//     phoneNumber: "1212343456" 

// } 

//   const deleteResult = await collection.deleteMany(deleteQuery);
//   console.log('Deleted documents =>', deleteResult);

// Count Documents
const countResult = await collection.countDocuments({});
console.log("Count of documents in the User Collection =>", countResult);

// Find all documents with a filter of firstname: Deepika
const result = await collection.find({firstname: "Deepika"}).toArray();
console.log("result =>", result);

return 'done.';


}

  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());




//Notes

// Go to mongodb website
// Create a free M0 cluster
// Create an User (will get password and username)
// Get the connection string (from compass)
// Install Mongo DB compass
