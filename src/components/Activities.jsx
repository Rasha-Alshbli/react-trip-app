import React from 'react'

const Activities = () => {
    return (
        <div className='max-W-[1140px] m-auto w-full md:flex mt-[-75px]'>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
                <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src='https://images.unsplash.com/photo-1538405255354-bf183b518024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXhjdXJzaW9uc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' alt='/' />
            </div>

            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>excursions</h3>
                <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src='https://images.unsplash.com/photo-1580541631950-7282082b53ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J1aXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' alt='/' />
            </div>

            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
                <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src='https://images.unsplash.com/photo-1580223530509-849e0ad583ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' alt='/' />
            </div>
        </div>
    )
}

export default Activities