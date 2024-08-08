
import React, { useEffect, useState } from 'react'
import img6  from '../assets/img/img6.jpeg'
import { Icons } from '../assets/Icons/Icons'
import { useRecoilState } from 'recoil'
import { isReviewEditing, render, editRPop,reviewedPopBtnState} from "../atoms"
import axios from 'axios'

const EditReview = ({payload}) => {

    const [cancelPop,setCancelPop]=useRecoilState(editRPop)
    const [participation,setParticipation]=useState(" ")
    const [respect,setRespect]=useState(" ")
    const [stars,setStars]=useState(0)
    const [starsLabel,setStarsLabel]=useState(null);
    const [description,setDescription]=useState(" ")
    const [isEditing,setIsEdditing]=useRecoilState(isReviewEditing)
    const [reRender,setReRender]=useRecoilState(render)
    const [success,setSuccess]=useState(false)
    const [reviewedBookingPopState,setReviewedBookingPopState]= useRecoilState(reviewedPopBtnState)

    const handleEdit=async ()=>{
    
        const data ={
                "comment" :description,
                "stars":starsLabel,
                "session_respectful":respect,
                "session_participation":participation,
                "seeker_id": "jellpino",
                "session_id":payload.payloadData.data.ConsultantReview.sessionId,
                "review_id":payload.payloadData.data.ConsultantReview.id
        }
    
          
        try {
          const result = await axios.put(`http://localhost:3000/api/consultationService/editReview`, data);   
          
          console.log("data changed successfully")
          setIsEdditing(false)
          setSuccess(true)
        } catch (err) {
          console.log(err)
        } 
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

     if(success){
      return(
        <div className='h-44 '>
        <div className='text-center text-3xl font-bold mb-10 mt-3'>
          Thank you for your feedback
        </div>
        <div className='text-center '>
          <button onClick={() => {
            setSuccess(false)
            setReviewedBookingPopState(false)   
            setReRender(!reRender)
          }}
          className='px-6 py-3 bg-red-500 text-white rounded-lg'>Close</button>
        </div>
      </div>
      )
    }


  return (
      <div>
        <div className='flex justify-between'>
              <div className='flex gap-2'>
                <div>
                  <img src={img6} className='w-12 h-12 rounded-full' alt="Profile" />
                </div>
                <div>
                  <div>Rekha Savant</div>
                  <div>May 10 at 7:00 AM</div>
                </div>
              </div>
              <div className='flex gap-4'>
                <div>
                  <button className='px-6 py-3 bg-white border border-red-500 text-red-500 rounded-lg' 
                  onClick={() => setCancelPop(false)}>Cancel</button>
                </div>
                <div>
                  <button className='px-6 py-3 bg-red-500 text-white rounded-lg'
                  onClick={handleEdit}>Submit</button>
                </div>
              </div>
            </div>
            <div className='my-2'>
              <hr />
            </div>
       <div className=' font-bold my-4'>
         Comment Your Session
       </div>
       <div className=' bg-gray-100 p-4'>
         <textarea className='w-full h-20 border border-slate-300 rounded-lg p-2'
         placeholder='Write your review'
         onChange={(e)=>{setDescription(e.target.value)}}></textarea>
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
              <button className={`h-6 w-6 border border-slate-300 rounded-full ${respect === "Always" ? 'bg-red-500' : ''}`}
              onClick={()=>{setRespect("Always")}}></button>
            </div>
            <div>
              Always
            </div>
          </div>
          <div className='flex my-4 gap-x-4 ' >
            <div>
              <button className={`h-6 w-6 border border-slate-300 rounded-full ${respect === "Most Of Time" ? 'bg-red-500' : ''}`}
              onClick={()=>{setRespect("Most Of Time")}}></button>
            </div>
            <div>
               Most of time 
            </div>
          </div>
          <div className='flex my-4 gap-x-4'>
            <div>
              <button className={`h-6 w-6 border border-slate-300 rounded-full ${respect === "Sometimes" ? 'bg-red-500' : ''}`}
              onClick={()=>{setRespect("Sometimes")}}></button>
            </div>
            <div>
              Sometimes
            </div>
          </div>
          <div className='flex my-4 gap-x-4'>
            <div>
              <button className={`h-6 w-6 border border-slate-300 rounded-full ${respect === "Rarely" ? 'bg-red-500' : ''}`}
              onClick={()=>{setRespect("Rarely")}}></button>
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
              <button className={`h-6 w-6 border border-slate-300 rounded-full ${participation === "Very Actively" ? 'bg-red-500' : ''}`}
              onClick={()=>{setParticipation("Very Actively")}}></button>
            </div>
            <div>
              Very Actively
            </div>
          </div>
          <div className='flex my-4 gap-x-4 ' >
            <div>
              <button className={`h-6 w-6 border border-slate-300 rounded-full ${participation === "Actively" ? 'bg-red-500' : ''}`}
              onClick={()=>{setParticipation("Actively")}}></button>
            </div>
            <div>
               Actively
            </div>
          </div>
          <div className='flex my-4 gap-x-4'>
            <div>
            <button
              className={`h-6 w-6 border border-slate-300 rounded-full ${participation === "Somewhat Actively" ? 'bg-red-500' : ''}`}
              onClick={() => setParticipation("Somewhat Actively")}
            ></button>

            </div>
            <div>
              Somewhat Actively
            </div>
          </div>
          <div className='flex my-4 gap-x-4'>
            <div>
              <button className={`h-6 w-6 border border-slate-300 rounded-full ${participation === "Not Actively" ? 'bg-red-500' : ''}`}
              onClick={()=>{setParticipation("Not Actively")}}></button>
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
                <button className='flex justify-center mx-auto'
                onClick={()=>{setStarsLabel("one")}}>
                  {(starsLabel=="one"||starsLabel=="two"||starsLabel=="three"||starsLabel=="four"||starsLabel=="five"?<Icons.RedStar/>:<Icons.ReviewStar/> )}
                </button>
              </div>
              <div className='text-gray-500 text-center font-bold'>
                  Worst
              </div>

            </div>
            <div>
              <div className='mx-auto'>
                <button className='flex justify-center mx-auto'
                onClick={()=>{setStarsLabel("two")}}>
                  {(starsLabel=="two"||starsLabel=="three"||starsLabel=="four"||starsLabel=="five"?<Icons.RedStar/>:<Icons.ReviewStar/> )}
                </button>
              </div>
              <div className='text-gray-500 text-center font-bold'>
                  Poor
              </div>

            </div>
            <div>
              <div className='mx-auto'>
                <button className='flex justify-center mx-auto'
                onClick={()=>{setStarsLabel("three")}}>
                {(starsLabel=="three"||starsLabel=="four"||starsLabel=="five"?<Icons.RedStar/>:<Icons.ReviewStar/> )}
                </button>
              </div>
              <div className='text-gray-500 text-center font-bold'>
                  Ok
              </div>

            </div>
            <div>
              <div className='mx-auto'>
                <button className='flex justify-center mx-auto'
                onClick={()=>{setStarsLabel("four")}}>
                   {(starsLabel=="four"||starsLabel=="five"?<Icons.RedStar/>:<Icons.ReviewStar/> )}
                </button>
              </div>
              <div className='text-gray-500 text-center font-bold'>
                  Good
              </div>

            </div>
            <div>
              <div className='mx-auto'>
                <button className='flex justify-center mx-auto'
                onClick={()=>{setStarsLabel("five")}}>
                  {(starsLabel=="five"?<Icons.RedStar/>:<Icons.ReviewStar/> )}
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

export default EditReview
