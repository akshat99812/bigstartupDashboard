import React, { useState ,useEffect} from 'react';
import img from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import CancelBookings from './CancelBookings';
import axios from 'axios'
import { Navigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { upcomingRender, upcomingUpdate } from '../atoms';
import { Icons } from '../assets/Icons/Icons';

export const UpcomingBookings = () => {

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [popUpData, setPopUpData] = useState({});
  const [id, setId] = useState(null);
  const [getAllBookings, setGetAllBookings] = useState([]);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [page, setPage] = useState(1)
  const [upcoming,setUpcoming]=useRecoilState(upcomingRender)
  const [render,setRender]=useRecoilState(upcomingUpdate)
  const [limit,setLimit]=useState(3)
  const [hasMore,setHasMore]=useState(true)
  const [response2,setResponse2]=useState([])
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    setLoading(false)
    const fetchPastBookings = async () => {
      try {
        const result = await axios.post('http://localhost:3000/api/consultationService/upcomingBookings', {
          consultant_id: "48462f0f-e8ae-4872-bdf8-271c0f22727e"
        });

        setResponse(result.data.getAllBookings)
        setGetAllBookings(data)


        if(result.data.getAllBookings.length < limit){
          setHasMore(false)
        }

        if(hasMore){
        const response2 = result.data.getAllBookings.slice(0, limit);
        setResponse2(response2);
        //setRender(!render)
        setLoading(true)
        }else{
          setResponse2(result.data.getAllBookings)
          setLoading(true)
        }
        console.log("response2 hai ye",response2)

      } catch (err) {
        setError(err.message)
      }
    };

    fetchPastBookings();
  }, [render,limit]);

  const data = Array.isArray(response) ? response : [response];

  const popupHandler = (someId) => {
    setPopUpData(data[someId - 1]);
    setId(someId);
    setUpcoming(true);
  };

  const closePopUp = () => {
    setUpcoming(false);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!response) {
    return <div>Loading...</div>;
  }
    
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-GB', options);
    };

    if(upcoming){
      return (
        <div>
          <div className='mt-2 flex my-2'>
              <button onClick={() => closePopUp()} 
              className="bg-gray-200 px-4 py-2 rounded-md px-8 hover:bg-gray-300">
                <div className='flex gap-3'>
                  <div>
                    <Icons.Back/>
                  </div>
                  <div>
                    Back
                  </div>
                </div>
                </button>
          </div>
          <CancelBookings id={id} bookingDetails={bookingDetails} />
        </div>
      )
    }
    

  return (
    <div className='overflow-y-auto h-[500px] '>
      <div className="text-xl font-bold text-left my-4">
        Upcoming Bookings
      </div>
        {response2.map((booking,index) => (
            <div className='border rounded-2xl my-4 ' key={booking.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-6 ">
                <div className='flex gap-10 mx-10'>
                  <div>
                    <img src={img} className="w-12 h-12 rounded-full" alt="Consultant" />
                  </div>
                  <div className='my-auto text-bold text-xl'>
                    Consultant Name
                  </div>
                  <div className="flex gap-2" >
                    <div className='my-auto'>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0009 21.5867L20.1884 24.7242C21.1384 25.2992 22.3009 24.4492 22.0509 23.3742L20.6759 17.4742L25.2634 13.4992C26.1009 12.7742 25.6509 11.3992 24.5509 11.3117L18.5134 10.7992L16.1509 5.22422C15.7259 4.21172 14.2759 4.21172 13.8509 5.22422L11.4884 10.7867L5.45088 11.2992C4.35088 11.3867 3.90088 12.7617 4.73838 13.4867L9.32588 17.4617L7.95088 23.3617C7.70088 24.4367 8.86338 25.2867 9.81338 24.7117L15.0009 21.5867Z" fill="#FC1C00"/>
                      </svg>
                    </div>
                    <div className='my-auto text-bold text-xl'>
                      4.5
                    </div>
                    <div className=' my-auto text-gray-500'>
                      Rating
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <div>
                    <button className='px-16 py-4 border border-red-500 text-red-600 rounded-full text-xl' onClick={() => {
                      popupHandler(booking.id)
                      setId(booking.id)
                      setBookingDetails(booking)
                      }}>
                      View Details 
                    </button>
                  </div>
                  <div>
                    <button className='px-16 text-xl bg-red-500 text-white py-4 border border-red-500 rounded-full'>
                      Join Session
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <div className='grid md:grid-cols-4 grid-cols-2 mx-10 my-8' >
                <div className='flex'>
                  <div>
                    <img src={img2} className="w-12 h-12 rounded-full" alt="Booking ID" />
                  </div>
                  <div>
                    <div className='text-bold mx-2'>
                      Booking ID
                    </div>
                    <div className='text-gray-500 mx-2'>
                      {booking.id}
                    </div>
                  </div>
                </div>
                <div className='flex'>
                  <div>
                    <img src={img3} className="w-12 h-12 rounded-full" alt="Consultation Category" />
                  </div>
                  <div>
                    <div className='text-bold mx-2'>
                      Consultation Category
                    </div>
                    <div className='text-gray-500 mx-2'>
                      {booking.category} consultation
                    </div>
                  </div>
                </div>
                <div className='flex'>
                  <div>
                    <img src={img4} className="w-14 h-12 rounded-full" alt="Session Time & Date" />
                  </div>
                  <div>
                    <div className='text-bold mx-2'>
                      Session Time & date
                    </div>
                    <div className='text-gray-500 mx-2'>
                      {formatDate(booking.date)}
                    </div>
                  </div>
                </div>
                <div className='flex'>
                  <div>
                    <img src={img5} className="w-12 h-12 rounded-full" alt="Booking Status" />
                  </div>
                  <div>
                    <div className='text-bold mx-2'>
                      Booking Status
                    </div>
                    <div className={`mx-2 ${
                      booking.booking_status === 'pending' ? 'text-yellow-600 bg-yellow-200 rounded-full text-center mt-2' :
                      booking.booking_status === 'cancelled' ? 'text-red-600 bg-red-200 rounded-full text-center mt-2' :
                      booking.booking_status === 'confirmed' ? 'text-purple-600 bg-purple-200 rounded-full text-center mt-2' :
                      'text-gray-500'
                    }`}>
                      {booking.booking_status}
                    </div>
                  </div>
                </div>
              </div>

            </div>
      ))}
      {hasMore&&
        <div>
          <div className='flex justify-center'>
            <button
            onClick={()=>{setLimit(limit+3)}}
            className='px-16 py-4 border border-red-500 text-red-600 rounded-full'>View More</button>
          </div>
        </div>
      }
     
    </div>
    
    
  )
}


