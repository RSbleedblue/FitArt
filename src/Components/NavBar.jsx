import logo from '../assets/logo.png';
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <div className="w-full flex justify-center  sticky top-0 bg-white  z-50 shadow-2xl">
                <div className='flex justify-between items-center w-[80%]'>
                    <div className='flex items-center'>
                        <img src={logo} className='w-16 h-16' alt="Logo" />
                        <p className='text-2xl font-semibold text-blue-900'>FitArt</p>
                    </div>
                    <ul className='text-white flex gap-2'>
                        <Link to="/" className='p-3 cursor-pointer bg-blue-600  hover:bg-blue-900 rounded-full trasition transition-transform delay-300'>Home</Link>
                        <Link to="/exercises" className='p-3 cursor-pointer bg-blue-600  hover:bg-blue-900 rounded-full trasition transition-transform delay-300'>Exercises</Link>
                    </ul>
                    <div className='text-white flex gap-10 items-center justify-center p-2 rounded-lg'>
                        <FaSearch className='text-2xl cursor-pointer text-blue-600 hover:text-blue-800' />
                        <MdAccountCircle className='text-3xl cursor-pointer text-blue-600 hover:text-blue-800'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;
