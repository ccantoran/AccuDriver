const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const MongoClient = require('mongodb').MongoClient
const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.4ccuni0.mongodb.net/?retryWrites=true&w=majority`

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('drivers')
    //check
  })
  .catch(error => console.error(error))


app.listen(3000, function(){
    console.log('listening on 3000')
})

app.get('/',(req, res) => {
    res.sendFile(__dirname +  '/index.html')
})