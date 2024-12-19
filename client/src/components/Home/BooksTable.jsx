import { Link } from "react-router-dom"
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineDelete} from 'react-icons/md'
import PropTypes from 'prop-types'


export const BooksTable = ({books}) => {
    BooksTable.propTypes = {
        books: PropTypes.arrayOf(PropTypes.object).isRequired,
      };
  return (
    <table className="w-full border-seperate border-spacing-2">
                    <thead>
                        <tr>
                    <th className="border border-slate-600 rounded-md">No</th>
                    <th className="border border-slate-600 rounded-md">Title</th>
                    <th className="border border-slate-600 rounded-md max-md:hidden">Author</th>
                    <th className="border border-slate-600 rounded-md max-md:hidden">PublishYear</th>
                    <th className="border border-slate-600 rounded-md">Operations</th>

                    </tr>
                    </thead>
                    <tbody>
                    {  
                    books.map((book,index) => 
                        (
                        <tr key={book._id}>

                        <td className="border border-slate-700 rounded-md text-center">
                            {index+1}
                        </td>

                        <td className="border border-slate-700 rounded-md text-center">
                            {book.title}
                        </td>

                        <td className="border border-slate-700 rounded-md text-center">
                            {book.author}
                        </td>

                        <td className="border border-slate-700 rounded-md text-center">
                            {book.publishYear}
                        </td>

                        <td className="border border-slate-700 rounded-md text-center">
                            <div className="flex justify-center gap-x-4">
                                <Link to ={`/books/details/${book._id}`}>

                                    <BsInfoCircle className="text-2xl text-green-800"/>
                                </Link>
                                <Link to ={`/books/edit/${book._id}`}>

                                    <AiOutlineEdit className="text-2xl text-green-800"/>
                                </Link>
                                <Link to ={`/books/delete/${book._id}`}>

                                    <MdOutlineDelete className="text-2xl text-green-800"/>
                                </Link>


                            </div>
                        </td>


                    </tr>
                    ))}
                    </tbody>

                </table>  
  )
}
