const express = require('express');
const app = express();
const cors =  require('cors');
const BookModel = require('./models/bookmodel')
const bookroute = require('./routes/bookRoute')


app.use(cors(
    {
        origin : 'http://localhost:5173',
        methods : ['GET','POST','PUT','DELETE'],
        allowedHeaders : ['Content-Type'],
    }

))
app.use(express.json())
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

URI = process.env.URI
PORT = process.env.PORT

mongoose.connect(URI).then(console.log('MongoDB Connected')).catch(err => console.log(err));

app.use('/books', bookroute);


app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})