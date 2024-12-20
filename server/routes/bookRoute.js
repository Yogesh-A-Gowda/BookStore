const router = require('express').Router();
const BookModel = require('../models/bookmodel');

// Setting CORS headers for each route
const FRONT_END_URL = process.env.FREND;

const setCORSHeaders = (res) => {
    res.setHeader('Access-Control-Allow-Origin', FRONT_END_URL);  // Frontend URL
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
};

// POST route for creating a book
router.post('/', async(req, res) => {
    setCORSHeaders(res); // Set CORS headers before sending the response
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: 'All fields are required' });
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
            summary: req.body.summary,
        };

        const book = await BookModel.create(newBook);
        console.log(book);
        return res.status(201).send(book);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: err.message });
    }
});

// PUT route for updating a book
router.put('/:id', async(req, res) => {
    setCORSHeaders(res); // Set CORS headers before sending the response
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: 'All fields are required' });
        }

        const { id } = req.params;
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
            summary: req.body.summary,
        };

        const book = await BookModel.findByIdAndUpdate(id, newBook);

        if (book) {
            return res.json({ message: 'Book updated successfully' });
        } else {
            return res.status(400).send({ message: 'Book Not found' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: err.message });
    }
});

// DELETE route for deleting a book
router.delete('/:id', async(req, res) => {
    setCORSHeaders(res); // Set CORS headers before sending the response
    try {
        const { id } = req.params;
        const result = await BookModel.findByIdAndDelete(id);

        if (result) return res.status(200).send({ message: 'Book Successfully Deleted' });
        return res.status(404).send({ message: 'Book not found' });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: err });
    }
});

// GET route for fetching all books
router.get('/', async(req, res) => {
    setCORSHeaders(res); // Set CORS headers before sending the response
    try {
        const books = await BookModel.find({});
        return res.status(200).json({
            count: books.length,
            data: books,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
});

// GET route for fetching a single book by ID
router.get('/:id', async(req, res) => {
    setCORSHeaders(res); // Set CORS headers before sending the response
    try {
        const { id } = req.params;
        const book = await BookModel.findById(id);
        if (book) {
            return res.status(200).json(book);
        } else {
            return res.status(404).send({ message: 'Book Not found' });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
});

module.exports = router;
