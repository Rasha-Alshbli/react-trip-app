import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='max-w-[1140px] m-auto w-full px-4 py-16'>
            <h2 className='text-gray-700 text-2xl font-bold text-center'>Send us a message</h2>
            <p className='text-gray-700 p-4 text-center'>We're standing by</p>

            <div className='grid md:grid-cols-2'>
                <img 
                src='https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
                alt='/'
                className='w-full max-h-[500px] h-[220px] object-cover md:h-full'
                />

                <form>
                    <div className='grid grid-cols-2'>
                        <input className='border p-2 m-2' type="text" placeholder ='First' />
                        <input className='border p-2 m-2' type="text" placeholder='Last' />
                        <input className='border p-2 m-2' type="email" placeholder='Email' />
                        <input className='border p-2 m-2' type="tel" placeholder='Phone' />
                        <input className='border p-2 m-2 col-span-2' type="text" placeholder='Address' />
                        <textarea cols='30' rows='10' className='border p-2 m-2 col-span-2' placeholder='Type your message here'></textarea>
                        <button className='m-2 p-2 col-span-2'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;
