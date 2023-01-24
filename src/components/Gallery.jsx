import React from 'react'

const Gallery = () => {
    return (
        <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
            <h2 className='text-center text-gray-700 p-4'>Gallery</h2>

            <div className='grid sm:grid-cols-5 gap-4'>
                <div className='sm:col-span-3 col-span-2 row-span-2'>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1609666869239-919fd1f0e7a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1624965085587-fb56d0ec6652?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1600255821058-c4f89958d700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" alt="/" />
                </div>
            </div>

        </div>
    )
}

export default Gallery
