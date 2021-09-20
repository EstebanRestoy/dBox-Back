
require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

const MongoClient = require('mongodb').MongoClient;
const url = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
let db
 
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
  db = client.db(dbName);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

