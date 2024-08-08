import React, { useState ,useEffect } from 'react'
import img6  from '../assets/img/img6.jpeg'
import { Icons } from '../assets/Icons/Icons'
import { useRecoilState } from 'recoil'
import { render, reviewedPopBtnState ,editRPop} from '../atoms'
import Review from './Review'
import axios from 'axios'
import EditReview from './EditReview'

const ReviewedSession = (payloadData) => {

    const [rmp,setRmp]=useRecoilState(reviewedPopBtnState)
    const [response,setResponse]=useState(null)
    const [error,setError]=useState(null)
    const [isEditing,setIsEdditing]=useRecoilState(editRPop)
    const [loading,setLoading]=useState(true)
    const [deleteSuccess,setDeleteSuccess]=useState(false)
    const [reRender,setReRender]=useRecoilState(render)
    const [deletePop,setDeletePop]=useState(false)

    const handleEdit=()=>{
        setIsEdditing(true)
    } 

    const editKaData=payloadData;

    const handleDelete = async () => {
        const payload = {
             "session_id": payloadData.payloadData.data.ConsultantReview.sessionId,
             "review_id": payloadData.payloadData.data.ConsultantReview.id
        };
        console.log("delete endpoint data")
        console.log(payloadData.payloadData.data.ConsultantReview.id);
        try {
            const response = await axios.delete('http://localhost:3000/api/consultationService/deleteReview',
                {
                    data:payload
                });
            setDeleteSuccess(true)
            console.log(deleteSuccess)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        const responseHandler=()=>{
            setResponse(payloadData)
        }
        responseHandler()
       //  console.log(payloadData.payloadData.data.ConsultantReview.comment)
    },[])

    const getTime=(date)=>{
        return date
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
     }

     const labelHandler=(props)=>{
        switch(props){
                case 'Very Actively':
                return "Very Active Participation";
                case 'Actively':
                    return "Active Participation";
                case 'Somewhat Actively':
                return "Somewhat Active Participation";
                case 'Not Actively':
                return "Not Active Participation";

                case 'Always':
                return 'Always Respectful';
                case 'Most Of Time':
                return 'Respectful';
                case 'Sometimes':
                return 'Sometimes Respectful';
                case 'Rarely':
                return 'Rarely Respectful';
                default:
                    return null;         
        }
     }

    if(deletePop){
        return (
            <div>
                <div className='flex justify-center'>
                <Icons.RedCross/>
                 </div>
            <div>
                <div className='text-xl font-bold text-center my-2'>
                    Cancel Booking 
                </div>
                <div className='text-gray-500 text-center my-2'>
                    Do you want to cancel this booking? 
                </div>
                <div className='flex justify-center gap-4'>
                    <div>
                        <button className='text-black px-4 py-2 rounded-full bg-gray-100'
                        onClick={()=>{
                            setDeletePop(false)
                        }}
                        >No keep</button>
                    </div>
                    <div>
                        <button className='text-white px-4 py-2 rounded-full bg-red-500'
                        onClick={()=>{
                            handleDelete()
                            setDeletePop(false)
                        }}
                        >Yes Cancel</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }

    if(deleteSuccess){
        return (
            <div>
                <div className="bg-white rounded-lg ">
                    <div className='text-center my-4'>
                        <button className='px-16 py-4 bg-red-500 text-white text-center rounded-full'
                        onClick={()=>{setDeleteSuccess(false)
                            setRmp(false)
                            setReRender(!reRender)

                        }}>Close</button>
                    </div>
                    <div className='text-center text-3xl font-bold'>
                        Review deleted successfully
                    </div>
                </div>
            </div>
        )
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
                        { payloadData.start_time}
                    </div>
                </div>
            </div>
            <div className='flex gap-x-4'>
                <div className='my-auto'>
                    <button onClick={()=>{setDeletePop(true)}}>
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
                    Sessioned by Ridhima ( Startup Consultation) about Marketing, finance & Investment
                </div>
                <div className='flex gap-x-2'>
                    <div className='flex'>
                        <div>
                            <Icons.Star/>
                        </div>
                        <div className='my-auto'>
                        {handleLabel(payloadData.payloadData.data.ConsultantReview.stars)}  Rating
                        </div>
                         
                    </div>
                    <div className='text-gray-500 my-auto'>
                        {getTime(payloadData.payloadData.data.ConsultantReview.start_time)}
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='my-auto'>
                    Happy With : 
                </div>
                <div className='text-gray-500 px-4 py-1 bg-violet-200 mx-2'>
                    {labelHandler(payloadData.payloadData.data.ConsultantReview.seeker_respectful)}
                </div>
                <div className='text-gray-500 px-4 py-1 bg-violet-200 mx-2'>
                    {labelHandler(payloadData.payloadData.data.ConsultantReview.seeker_participate)}
                </div>
            </div>
            <div className='text-gray-500 my-3 w-4/5'>
                 {payloadData.payloadData.data.ConsultantReview.comment}
            </div>
        </div>
        {isEditing &&
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg md:w-3/4">
          <div>
            <EditReview payload={payloadData} ></EditReview>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default ReviewedSession
