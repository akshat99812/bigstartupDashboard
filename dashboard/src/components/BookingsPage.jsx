import React, { useState } from 'react'
import { ProfileCard } from './ProfileCard'
import { Sidebar } from './Sidebar'
import { UpcomingBookings } from './UpcomingBookings'
import { PastBooking } from './PastBookings'


export const Page=()=>{

    const [bookings,setBookings]=useState(true);
    return (
        <div className='flex'>
            <div className='w-1/4'>
                <ProfileCard></ProfileCard>
                <Sidebar></Sidebar>
            </div>
            <div className='w-3/4'>
                <div className='flex border rounded-lg justify-center'>
                    <div className='flex justify-center'>
                        <div>
                            <button className={`mx-2 ${
                        bookings == true ? 'px-16 text-xl py-5 text-center rounded-lg my-1 text-red-500 bg-red-100' :
                        bookings == false ? 'px-16 text-xl py-5 text-center  rounded-lg my-1 text-gray-500 bg-gray-100' :
                        ''
                        }`} onClick={()=>{
                                setBookings(!bookings)
                            }}>
                                Upcoming Bookings</button>
                        </div>
                        <div>
                            <button className={`mx-2 ${
                        bookings == false ? 'px-20 text-xl py-5 text-center  rounded-lg my-1 text-red-500 bg-red-100' :
                        bookings == true ? 'px-20 text-xl py-5 text-center  rounded-lg my-1 text-gray-500 bg-gray-100' :
                        ''
                        }`} onClick={()=>{
                                setBookings(!bookings)
                            }}>Past Bookings</button>
                        </div>
                    </div>
                    
                </div>
                {bookings === true ? <UpcomingBookings /> : <PastBooking />}
            </div>
        </div>
    )
}