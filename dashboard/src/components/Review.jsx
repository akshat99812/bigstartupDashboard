import React from 'react'
import img6  from '../assets/img/img6.jpeg'
import { Icons } from '../assets/Icons/Icons'

const Review = () => {
  return (
    <div>
       <div className=' font-bold my-4'>
         Comment Your Session
       </div>
       <div className=' bg-gray-100 p-4'>
         <textarea className='w-full h-20 border border-slate-300 rounded-lg p-2'
         placeholder='Write your review'></textarea>
       </div>
       <div>
        <div className=' font-bold my-4'>
        Select some more review options for the betterment of our consultants
        </div>
        <div className='text-purple-700 font-bold'>
        Was the seeker respectful and professional throughout the interaction?
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 text-gray-500'>
          <div className='flex my-4 gap-x-4'>
            <div>
              <button className='h-6 w-6 border border-slate-300 rounded-full'></button>
            </div>
            <div>
              Always
            </div>
          </div>
          <div className='flex my-4 gap-x-4 ' >
            <div>
              <button className='h-6 w-6 border border-slate-300 rounded-full'></button>
            </div>
            <div>
               Most of time 
            </div>
          </div>
          <div className='flex my-4 gap-x-4'>
            <div>
              <button className='h-6 w-6 border border-slate-300 rounded-full'></button>
            </div>
            <div>
              Sometimes
            </div>
          </div>
          <div className='flex my-4 gap-x-4'>
            <div>
              <button className='h-6 w-6 border border-slate-300 rounded-full'></button>
            </div>
            <div>
              Rarely
            </div>
          </div>
        </div>
        <div className='text-purple-700 font-bold'>
        How actively did the seeker participate in the session?
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 text-gray-500'>
          <div className='flex my-4 gap-x-4'>
            <div>
              <button className='h-6 w-6 border border-slate-300 rounded-full'></button>
            </div>
            <div>
              Very Actively
            </div>
          </div>
          <div className='flex my-4 gap-x-4 ' >
            <div>
              <button className='h-6 w-6 border border-slate-300 rounded-full'></button>
            </div>
            <div>
               Actively
            </div>
          </div>
          <div className='flex my-4 gap-x-4'>
            <div>
              <button className='h-6 w-6 border border-slate-300 rounded-full'></button>
            </div>
            <div>
              Somewhat Actively
            </div>
          </div>
          <div className='flex my-4 gap-x-4'>
            <div>
              <button className='h-6 w-6 border border-slate-300 rounded-full'></button>
            </div>
            <div>
              Not Actively
            </div>
          </div>
        </div>
        
       </div>
       <div>
          <div className='text-xl my-4'>
            Rate your session
          </div>
          <div className='grid grid-cols-3 md:grid-cols-5 bg-gray-100 py-5'>
            <div>
              <div className='mx-auto'>
                <button className='flex justify-center mx-auto'>
                  <Icons.ReviewStar/>
                </button>
              </div>
              <div className='text-gray-500 text-center font-bold'>
                  Worst
              </div>

            </div>
            <div>
              <div className='mx-auto'>
                <button className='flex justify-center mx-auto'>
                  <Icons.ReviewStar/>
                </button>
              </div>
              <div className='text-gray-500 text-center font-bold'>
                  Poor
              </div>

            </div>
            <div>
              <div className='mx-auto'>
                <button className='flex justify-center mx-auto'>
                  <Icons.ReviewStar/>
                </button>
              </div>
              <div className='text-gray-500 text-center font-bold'>
                  Ok
              </div>

            </div>
            <div>
              <div className='mx-auto'>
                <button className='flex justify-center mx-auto'>
                  <Icons.ReviewStar/>
                </button>
              </div>
              <div className='text-gray-500 text-center font-bold'>
                  Good
              </div>

            </div>
            <div>
              <div className='mx-auto'>
                <button className='flex justify-center mx-auto'>
                  <Icons.ReviewStar/>
                </button>
              </div>
              <div className='text-gray-500 text-center font-bold'>
                  Excellent
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Review
