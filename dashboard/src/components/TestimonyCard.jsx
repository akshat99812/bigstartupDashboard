import React, { useState } from 'react'
import { Icons } from '../assets/Icons/Icons'
import img6  from '../assets/img/img6.jpeg'

const TestimonyCard = ({data}) => {
    const [reply,setReply]=useState("");

   const onReply =()=>{
    data.details.reply.push(reply);
    setReply("");
   }

   const onCancel=()=>{
    setReply("");
   }

  return (
    <div className='border my-4'>
      <div className='grid lg:grid-cols-2 grid-cols-1 mt-2'>
        <div className='flex justify-center mr-auto ml-4 gap-4'>
            <div>
                <img src={img6} alt='img6' className='h-12 w-12 rounded-full'></img>
            </div>
            <div className='my-auto text-2xl'>
                {data.user.name}
            </div>

        </div>
        <div className='flex justify-center gap-4 ml-auto mr-4 text-gray-500 '>
            <div className='flex justify-center my-auto gap-2 '>
                <div>
                    <Icons.Star></Icons.Star>
                </div>
                <div className='my-auto'>
                   {data.user.rating} Rating
                </div>
            </div>
            <div className='my-auto'>
                {data.details.date}
            </div>

        </div>
      </div>
        <div className='ml-4 text-xl my-2'>
            Sessioned by {data.details.name} ( Startup Consultation) about Marketing, finance & Investment
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
                {data.details.qualities.map((item)=>{
                    return(
                        <div className='my-auto text-gray-500 bg-blue-100 text-center px-2'>
                            {item}
                         </div>
                    )
                })}
                    
            </div>
        </div>
        <div className='mx-4'>
            {data.details.comment}
        </div>
        <div>
            <button 
            className='ml-4 my-4 my-6 text-blue-500'>Reply</button>
        </div>
        <div className='mx-10'>
            <hr />
        </div>
        <div className='flex justify-between mx-4 my-4' >
            <div className='flex gap-4 '>
                <div>
                    <img src={img6} alt='img6' className='h-12 w-12 rounded-full'></img>
                </div>
                <div className='my-auto text-xl'>
                     {data.details.name}
                </div>
                
            </div>
            <div className='flex gap-4'>
                <div>
                    <button className='text-red-500 px-4 py-2 text-xl my-auto border-2 border-red-500 rounded-lg'
                    onClick={()=>{
                        onCancel()
                    }}>Cancel</button>
                </div>
                <div>
                    <button className='text-white px-4 bg-red-500 py-2 text-xl my-auto border-2 border-red-500 rounded-lg' 
                    onClick={()=>{
                        onReply();
                    }}>Reply</button>
                </div>

            </div>
        </div>
        <div>
            <input className='my-4  border border-gray-300 w-3/4 mx-4 ' 
            placeholder='Write a reply' onChange={(e)=>setReply(e.target.value)}>
            </input>
        </div>
        
       {data.details.reply &&
       <div>
       <div className='flex justify-between mx-4 my-6'>
           <div className='flex gap-4'>
               <div>
                   <Icons.Reply/>
               </div>
               <div>
                   Replied
               </div>
           </div>
           <div className='flex gap-4'>
               <div>
                   <button>
                       <Icons.Pen/>
                   </button>
               </div>
               <div>
                   <button>
                       <Icons.Trash/>
                   </button>
               </div>
           </div>
       </div>
       {
            data.details.reply && data.details.reply.map((review, index) => (
                <div key={index} className="border p-4 mb-2 rounded">
                <div>{review}</div>
                </div>
            ))
            }  
   </div>
       } 

    </div>
  )
}

export default TestimonyCard
