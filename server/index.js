const express = require('express');
const app = express();
const cors = require('cors');
const BookModel = require('./models/bookmodel');
const bookroute = require('./routes/bookRoute');
const dotenv = require('dotenv');
dotenv.config();


furl = process.env.FREND;
console.log(furl);

// CORS configuration
app.use(cors(
    {
        origin: furl,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type']
    }
));

app.use(express.json());

const mongoose = require('mongoose');

URI = process.env.URI;
PORT = process.env.PORT;

mongoose.connect(URI).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

app.use('/books', bookroute);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});