const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://ccantoran1:<password>@cluster0.4ccuni0.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(connectionString, (err, 
    client) => {
<<<<<<< HEAD
        //change 3
=======
        //change 2
>>>>>>> f907f6ea48e096b91c4b6e060f949d8c2215ce2a
    })

app.listen(3000, function(){
    console.log('listening on 3000')
})

app.get('/',(req, res) => {
    res.sendFile(__dirname +  '/index.html')
})