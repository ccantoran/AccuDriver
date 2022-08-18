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
  })
  .catch(error => console.error(error))

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/',(req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000, function(){
  console.log('listening on 3000')
})