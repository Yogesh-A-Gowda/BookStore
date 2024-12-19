const router = require('express').Router();
const BookModel = require('../models/bookmodel')

router.post('/', async(req,res) => {
    try{
        if(
            !req.body.title || !req.body.author || !req.body.publishYear
        ) {
            return res.status(400).send({message : 'All fields are required'})
        }

        const newBook = {
            title : req.body.title,
            author : req.body.author,
            publishYear : req.body.publishYear,
            summary : req.body.summary
        }
       const book = await BookModel.create(newBook)
       console.log(book)
       return res.status(201).send(book)

    }
    catch(err){
        console.log(err);
        res.status(500).send({message : err.message})
    }
})


router.put('/:id', async(req,res) => {
    try{
        if(
            !req.body.title || !req.body.author || !req.body.publishYear
        ) {
            return res.status(400).send({message : 'All fields are required'})
        }
        const {id} = req.params;
        const newBook = {
            title : req.body.title,
            author : req.body.author,
            publishYear : req.body.publishYear,
            summary : req.body.summary
        }
       const book = await BookModel.findByIdAndUpdate(id,newBook)
    if(book)
        {
       return res.json({messgae : 'Book updated successfully'}) }
       else return res.status(400).send({message:'Book Not found'})

    }
    catch(err){
        console.log(err);
        res.status(500).send({message : err.message})
    }
})


router.delete('/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const result = await BookModel.findByIdAndDelete(id);

        if (result) return res.status(200).send({message:'Book Successfully Deleted'});
        return res.status(404).send({message:"Book not found"})

    }
    catch(err){
        console.log(err)
        return res.status(500).send({message : err})
    }
})




router.get('/', async(req,res) => {
    try{
        const Book = await BookModel.find({});
        return res.status(200).json({
            count : Book.length,
            data : Book
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).send({message : "Internal Server Error"})

    }
})


router.get('/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const Book = await BookModel.findById(id);
        if(Book) {
            return res.status(200).json(Book)
        }
      else {  return res.status(404).send({message:"Book Not found"}) }
    }
    catch(err){
        console.log(err)
        return res.status(500).send({message : "Internal Server Error"})

    }
})

module.exports = router;