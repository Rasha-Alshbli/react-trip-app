import React from 'react';

const hero = () => {
    return (
        <div className='w-full h-[90vh]'>
            <img src='https://images.unsplash.com/photo-1535262412227-85541e910204?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80' alt='background image'
            className='w-full h-full object-cover' />
            <div className='max-w-[1140px] m-auto'>
                <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                    <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                    <h2 className='text-4xl py-4 italic'>With WEEKAWAY</h2>
                    <p className='text-gray-500'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus neque, deleniti magni ab cumque necessitatibus fuga quo suscipit molestiae asperiores?
                    </p>
                </div>
            </div>
        </div>
    ) 
}

export default hero