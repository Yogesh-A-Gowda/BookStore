import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function BackButton(){
    return (

        <div className="flex">
            <Link to = '/' className="bg-black text-white px-4 py-1 rounded-lg w-fit">
                <BsArrowLeft className="text-2xl"/>
            </Link>
        
        
        </div>

    )
}
export default BackButton