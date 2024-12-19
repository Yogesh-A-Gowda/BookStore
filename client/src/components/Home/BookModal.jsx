import { AiOutlineClose } from "react-icons/ai"
import { PiBookOpenTextLight } from "react-icons/pi"
import { BiUserCircle } from "react-icons/bi"
import PropTypes from 'prop-types'

export const BookModal = ({books,onClose}) => {
    BookModal.propTypes = {
        books: PropTypes.arrayOf(PropTypes.object).isRequired,
        onClose : PropTypes.arrayOf(PropTypes.object).isRequired
      };
  return (
    <div 
  className="bg-black bg-opacity-60 z-50 flex justify-center items-center inset-0 fixed"
  onClick={onClose}
>
  <div 
    onClick={(event) => event.stopPropagation()} 
    className="w-[90%] max-w-3xl h-[90%] max-h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
  >
    
    <AiOutlineClose className="absolute right-4 top-2 text-3xl text-red-600 cursor-pointer" onClick={onClose}/>

    <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
      {books.publishYear}
    </h2>

    <div className="flex flex-col gap-y-2 mt-8">

      <h4 className="text-gray-500">{books._id}</h4>
      <div className="flex items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="text-lg font-semibold">{books.title}</h2>
      </div>

      <div className="flex items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="text-lg">{books.author}</h2>
      </div>

      <div className="flex items-center gap-x-2">
        <h2 className="text-lg">{books.summary}</h2>
      </div>

    </div>
  </div>
</div>

  )
}
