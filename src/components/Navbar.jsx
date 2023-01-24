import React, {useState} from 'react';
import {FaBars, FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram} from 'react-icons/fa';
// import {BsChatSqurareDots} from 'react-icons/bs';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='w-full min-h-[50px] flex justify-between items-center absolute z-1O text-white bg-gray-700/80'>
            <ul className='hidden sm:flex px-4'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#gallery">Gallery</a>
                </li>
                <li>
                    <a href="#deals">Deals</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            {/*social icons */}
            <div className='flex justify-between'>
                <FaFacebookF className='mx-4' />
                <FaTwitter className='mx-4' />
                <FaGooglePlusG className='mx-4' />
                <FaInstagram className='mx-4' />
            </div>

            {/* Hamburger icon */}
            <div onClick={handleNav} className='sm:hidden z-10'>
                <FaBars size={20} className="mr-4 cursor-pointer" />
            </div>
            {/* Mobile Menu */}
            <div onClick={handleNav}
                className={
                nav 
                ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute z-10 left-0 top-0 w-full h-screen text-gray-300 bg-black/95 px-4 py-7 flex flex-col'
                : 'absolute h-screen top-0 left-[-100%] ease-in duration-500'
            }>
                <ul className='w-full h-screen text-center pt-12'>
                    <li className='text-2xl py-8'>
                        <a href="/">Home</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href="#deals">Deals</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href="#contact">Contact</a>
                    </li>
                    </ul>
            </div>

        </div>
    )
}

export default Navbar