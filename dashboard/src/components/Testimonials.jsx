import React,{useState,useEffect} from 'react'
import { ProfileCard } from './ProfileCard'
import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'
import TestimonyCard from './TestimonyCard'
import axios from 'axios'

const Testimonials = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const payload={
        "consultant_id": "f5b129bc-a727-4059-ba96-0311d272718a"
    }
    const fetchData = async () => {
      try {
        const result = await axios.post(`http://localhost:3000/api/consultationService/testimonials`, payload);
        setResponse(result.data.testimonial);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  if(loading){
    return <div>Loading...</div>
  }

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
                   <div className='overflow-auto h-screen'>
                   {response.map((item) => (
                    <TestimonyCard key={item.id} data={item} />
                  ))}
                   </div>
            </div>
          </div>
    </div>
    
  )
}

export default Testimonials
