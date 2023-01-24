import React from 'react'

const Booking = () => {
    return (
        <div id='deals' className='max-w-[1140px] m-auto w-full p-4'>
            <form className='lg:flex lg:justify-between w-full items-center'>
                <div className='flex flex-col my-2 py-2'>
                    <label>Destinations</label>
                    <select className='lg:w-[300px] md:w-full border rounded-md p-2 outline-none'>
                        <option>Grand Antigue</option>
                        <option value="">Key West</option>
                        <option value="">Maldives</option>
                        <option value="">cozumel</option>
                    </select>
                </div>

                <div className='flex w-full lg:px-4 justify-between'>
                    <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                        <label>Check-in</label>
                        <input className='outline-none border rounded-md p-2' type="date" />
                    </div>
                    <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                        <label>Check-out</label>
                        <input className='outline-none border rounded-md p-2' type="date" />
                    </div>
                </div>

                <div className='flex flex-col my-2 p-2 w-full'>
                    <label>Search</label>
                    <button className='w-full'>Rates & Availabilities</button>
                </div>
            </form>
        </div>
    )
}

export default Booking
