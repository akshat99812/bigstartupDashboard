import React, { useState ,useEffect } from 'react'
import img6  from '../assets/img/img6.jpeg'
import { Icons } from '../assets/Icons/Icons'
import { useRecoilState } from 'recoil'
import { reviewCancelBtnState, reviewedPopBtnState ,isReviewEditing, reviewData } from '../atoms'
import Review from './Review'
import axios from 'axios'

const ReviewedSession = (id,data) => {

    const [reviewEditPop,setReviewEditPop]=useRecoilState(reviewCancelBtnState)
    const [rmp,setRmp]=useRecoilState(reviewedPopBtnState)
    const [response,setResponse]=useState(null)
    const [error,setError]=useState(null)
    const [isEditing,setIsEdditing]=useRecoilState(isReviewEditing)
    const [reviewedData,setReviewedData]=useRecoilState(reviewData)

    const handleEdit=()=>{
        setRmp(false)
        setReviewEditPop(true)
        setIsEdditing(true)
    } 

    const handleDelete = async () => {
        const data = {
            "session_id": id['data'].sessionId,
            "review_id": reviewedData.id
        };
        console.log(data);
        try {
            const response = await axios.delete('http://localhost:3000/api/consultationService/deleteReview', {
                data: data
            });
            setRmp(false)
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        const responseHandler=()=>{
            setResponse(data)
        }
        responseHandler()
    },[])

    const getTime=()=>{

    }

    const handleLabel=(word)=>{
        switch (word) {
          case 'one':
              return 1;
          case 'two':
              return 2;
          case 'three':
              return 3;
          case 'four':
              return 4;
          case 'five':
              return 5;
          default:
              return null; 
      }
      }

     const closeHandler=()=>{
        setRmp(false)
        console.log(reviewedData)
     }

  return (
    <div>
        <div className='flex justify-between'>
            <div className='flex gap-4'>
                <div>
                    <img src={img6} className='h-12 w-12 rounded-full'></img>
                </div>
                <div>
                    <div className='font-bold'>
                        Rekha Sahu
                    </div>
                    <div className='text-gray-500 '>
                        {reviewData.start_time}
                    </div>
                </div>
            </div>
            <div className='flex gap-x-4'>
                <div className='my-auto'>
                    <button onClick={()=>{handleDelete()}}>
                        <div className='flex gap-2'>                      
                            <div>
                                <Icons.RedTrash/>
                            </div> 
                            <div className='text-red-500 my-auto font-bold text-xl'>
                                Delete
                            </div>
                        </div>
                    </button>
                </div>
                <div className='my-auto'
                onClick={()=>{handleEdit()}}>
                    <button>
                        <div className='flex gap-2'>                      
                            <div>
                                <Icons.RedPencil/>
                            </div> 
                            <div className='text-red-500 my-auto font-bold text-xl'>
                                Edit
                            </div>
                        </div>
                    </button>
                </div>
                <div className='my-auto'>
                    <button onClick={closeHandler}>
                        <div className='flex gap-2'>                      
                            <div>
                                <Icons.RedCross/>
                            </div> 
                            <div className='text-red-500 my-auto font-bold text-xl'>
                                Close
                            </div>
                        </div>
                    </button>
                </div>
            </div>

        </div>
        <div className='my-4'>
            <hr></hr>
        </div>
        <div>
            <div className='flex justify-between'>
                <div>
                    Sessioned by Ridhima Sen ( Startup Consultation) about Marketing, finance & Investment
                </div>
                <div className='flex gap-x-2'>
                    <div className='flex'>
                        <div>
                            <Icons.Star/>
                        </div>
                        <div className='my-auto'>
                        4  Rating
                        </div>
                         
                    </div>
                    <div className='text-gray-500 my-auto'>
                        2 Hours Ago
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='my-auto'>
                    Happy With : 
                </div>
                <div className='text-gray-500 px-4 py-1 bg-violet-200 mx-2'>
                    Excellent Behavior
                </div>
                <div className='text-gray-500 px-4 py-1 bg-violet-200 mx-2'>
                    {reviewedData.comment}
                </div>
            </div>
            <div className='text-gray-500 my-3 w-4/5'>
                {reviewedData.comment}
            </div>
        </div>
        {reviewEditPop&&
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg md:w-3/4">
          <div>
            <Review id={id}/>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default ReviewedSession
