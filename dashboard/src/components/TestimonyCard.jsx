import React, { useEffect, useState } from 'react'
import { Icons } from '../assets/Icons/Icons'
import img6  from '../assets/img/img6.jpeg'
import axios from 'axios'

const TestimonyCard = ({data}) => {
    const [reply,setReply]=useState("");

   const onReply =()=>{
    data.details.reply.push(reply);
    setReply("");
   }

   const onCancel=()=>{
    setReply("");
   }
    const parsedQuality = JSON.parse(data.qualities);
    
    function timeDifference(dateString) {
        const inputDate = new Date(dateString);
        
        const currentTime = new Date();
        
        const timeDiff = currentTime - inputDate;
        
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        if (days > 0) {
            return `${days} days ago`;
        } else {
            return `${hours} hours ago`;
        }
    }

  return (
    <div className='border my-4'>
      <div className='grid lg:grid-cols-2 grid-cols-1 mt-2'>
        <div className='flex justify-center mr-auto ml-4 gap-4'>
            <div>
                <img src={img6} alt='img6' className='h-12 w-12 rounded-full'></img>
            </div>
            <div className='my-auto text-2xl'>
                Rekha Sahu
            </div>

        </div>
        <div className='flex justify-center gap-4 ml-auto mr-4 text-gray-500 '>
            <div className='flex justify-center my-auto gap-2 '>
                <div>
                    <Icons.Star></Icons.Star>
                </div>
                <div className='my-auto'>
                   {data.rating} Rating
                </div>
            </div>
            <div className='my-auto'>
                {timeDifference(data.date)}
            </div>

        </div>
      </div>
        <div className='ml-4 text-xl my-2'>
            Sessioned by {data.seekerId} ( Startup Consultation) about Marketing, finance & Investment
        </div>
        <div className='flex gap-4 ml-4'>
            <div>
                <Icons.Thumb/>
            </div>
            <div className='my-auto text-gray-500'>
                I would recommend.
            </div>
        </div>
        <div className='flex ml-4 my-4'>
            <div>
                Happy with : 
            </div>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
                {parsedQuality.map((item)=>{
                    return(
                        <div className='my-auto mx-2 text-gray-500 bg-blue-100 text-center px-2'>
                            {item}
                         </div>
                    )
                })}
                
                
                    
            </div>
        </div>
        <div className='mx-4'>
            {data.comment}
        </div>
        <div>
            <button 
            className='ml-4 my-4 my-6 text-blue-500'>Reply</button>
        </div>
        <div className='mx-10'>
            <hr />
        </div>
        
    </div>
  )
}

export default TestimonyCard
