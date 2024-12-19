import PropTypes from 'prop-types'
import { BookSingleCard } from "./BookSingleCard"

export const BooksCard = ({books})=>{
    BooksCard.propTypes = {
        books: PropTypes.arrayOf(PropTypes.object).isRequired,
      };
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-4">
        {books && books.map((book) => (

            <BookSingleCard key={book._id} books={book}/>
        ))}


    </div>
  )
}