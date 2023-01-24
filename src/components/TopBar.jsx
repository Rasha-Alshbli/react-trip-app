import React from 'react';
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai';
import {BsChatSquareDots} from 'react-icons/bs';

const TopBar = () => {
    return (
        <div className='px-4 py-2 flex justify-between items-center'>
            <div className='flex items-center'>
                <BsChatSquareDots size={30} className="text-[var(--primary-dark)]" />
                <h1 className='text-xl text-gray-700 font-bold px-2'>WEEKAWAY</h1>
            </div>

            <div className='flex items-center'>
                <div className='hidden md:flex items-center px-6'>
                    <AiOutlineClockCircle size={20} className="text-[var(--primary-dark)]" />
                    <p className='px-2 text-gray-700'>9AM - 5PM</p>
                </div>
                <div className='hidden md:flex items-center px-6'>
                    <AiFillPhone size={20} className="text-[var(--primary-dark)]"/>
                    <p className='px-2 text-gray-700'>1-888-777-6666</p>
                </div>
                <button>Get a free Quote</button>
            </div>
        </div>
    )
}

export default TopBar