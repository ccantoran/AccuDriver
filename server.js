const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://ccantoran1:<password>@cluster0.4ccuni0.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(connectionString, (err, 
    client) => {
        
    })

app.listen(3000, function(){
    console.log('listening on 3000')
})

app.get('/',(req, res) => {
    res.sendFile(__dirname +  '/index.html')
})