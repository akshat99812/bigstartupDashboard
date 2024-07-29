import React from 'react'
import { ProfileCard } from './ProfileCard'
import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'
import TestimonyCard from './TestimonyCard'

const Testimonials = () => {
  const data =[
    {
      id:0,
      user:{
        name:"Rekha Sahu",
        rating:3.5,
        imgUrl:"imgurl.com",
        description:"Ridhima Sen ( Startup Consultation) about Marketing, finance & Investment",
      },
      details:{
        name:"Riddhima Patel",
        date:"2 Months ago",
        qualities:[
          "Excellent Behavior",
          "Punctuality",
          "Explanation of issue",
          "Communication",
        ],
        comment:"I had an appointment for 1 pm on 14th June and also received a confirmation call from the clinic for the same as the doc starts her clinic from 1 pm so it was the first appointment I had taken. Upon reaching the clinic on time I realised the receptionist sent someone else in the cabin before me and there was also another person come with a 1 pm appointment. Not sure how do they run the show. On the other hand after visiting the doctor within 5 minutes I was out with a prescription in hand and doctor mentioning not to wear shoes for the next six months",
        reply:[]||null
      },  
    },
    {
      id:1,
      user:{
        name:"Rekha Sahu",
        rating:3.1,
        imgUrl:"imgurl.com",
        description:"Ridhima Sen ( Startup Consultation) about Marketing, finance & Investment",
      },
      details:{
        name:"Riddhima Patel",
        date:"2 Months ago",
        qualities:[
          "Excellent Behavior",
          "Punctuality",
          "Explanation of issue",
          "Communication",
        ],
        comment:"I had an appointment for 1 pm on 14th June and also received a confirmation call from the clinic for the same as the doc starts her clinic from 1 pm so it was the first appointment I had taken. Upon reaching the clinic on time I realised the receptionist sent someone else in the cabin before me and there was also another person come with a 1 pm appointment. Not sure how do they run the show. On the other hand after visiting the doctor within 5 minutes I was out with a prescription in hand and doctor mentioning not to wear shoes for the next six months",
        reply:["I had an appointment for 1 pm on 14th June and also received a confirmation call from the clinic for the same as the doc starts her clinic from 1 pm so it was the first appointment I had taken. Upon reaching the clinic on time I realised the receptionist sent someone else in the cabin before me and there was also another person come with a 1 pm appointment. Not sure how do they run the show. On the other hand after visiting the doctor within 5 minutes I was out with a prescription in hand and doctor mentioning not to wear shoes for the next six months",
          
          ""
        ]
      },
      
    }
  ]
  return (
    <div>
        <Navbar></Navbar>
        <div className='flex'>
            <div className='w-1/4'>
                      <ProfileCard></ProfileCard>
                      <Sidebar></Sidebar>
              </div>
            <div className='w-3/4'>
                    <div className='text-xl text-bold my-4 bg-gray-100 p-2 text-red-500'>
                      Customer Testimonials
                    </div>
                   <div>
                   {data.map((item) => (
                    <TestimonyCard key={item.id} data={item} />
                  ))}
                   </div>
            </div>
          </div>
    </div>
    
  )
}

export default Testimonials
