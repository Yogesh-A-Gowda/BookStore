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
const allowedOrigins = [
  furl, // Local development
  'https://book-store-zeta-sable.vercel.app',// Production frontend
];

// CORS middleware
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g., mobile apps or Postman)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error('Not allowed by CORS')); // Deny the request
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
}));

app.use(express.json());

const mongoose = require('mongoose');

URI = process.env.URI;
PORT = process.env.PORT;

mongoose.connect(URI).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

app.use('/books', bookroute);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
