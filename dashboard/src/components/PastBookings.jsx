import React, { useState, useEffect } from 'react';
import img from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.jpeg";
import axios from 'axios';
import Review from './Review';

export const PastBooking = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [pop, setPop] = useState(false);
  const [popUpData, setPopUpData] = useState({});
  const [getAllBookings, setGetAllBookings] = useState([]);
  const [bookingDetails,setBookingDetails] = useState(null);

  useEffect(() => {
    const fetchPastBookings = async () => {
      try {
        const result = await axios.post('http://localhost:3000/api/consultationService/upcomingBookings', {
          gender: "male",
          experience: 2,
          user_slug: "hellti",
          verification_status: true,
          description: "none",
          limit: 10,
          page: 1,
          reply: "done it",
          price: 500,
          order_id: "heomt",
          seeker_id: "jellpino",
          slot: {
            date: "2024-07-30T00:00:00Z",
            start_time: "2024-07-30T10:47:00Z",
            duration: 60
          },
          pricing_id: "jf;lajisgj",
          comment: "Did it by mistake",
          cancelled_by: "seeker",
          confirmed_by: "consultant",
          session_category: "startup",
          consultant_id: "48462f0f-e8ae-4872-bdf8-271c0f22727e",
          session_id: "f0b76c51-8854-481e-a14d-521c5be2ac49"
        });

        setResponse(result.data);
        setGetAllBookings(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPastBookings();
  }, []);

  const data = Array.isArray(response) ? response : [response];

  const popupHandler = (someId) => {
    setPopUpData(data[someId - 1]);
    setPop(true);
  };

  const closePopUp = () => {
    setPop(false);
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

  return (
    <div>
      {/* Uncomment and use the below block as needed */}
      {data[0].getAllBookings.map((data, index) => (
        <div className='border rounded-2xl my-4' key={data.id}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-6">
            <div className='flex gap-10 mx-10'>
              <div>
                <img src={img} className="w-12 h-12 rounded-full" alt="Profile" />
              </div>
              <div className='my-auto text-bold text-xl'>
                {data.name}
              </div>
              <div className="flex gap-2">
                <div className='my-auto'>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0009 21.5867L20.1884 24.7242C21.1384 25.2992 22.3009 24.4492 22.0509 23.3742L20.6759 17.4742L25.2634 13.4992C26.1009 12.7742 25.6509 11.3992 24.5509 11.3117L18.5134 10.7992L16.1509 5.22422C15.7259 4.21172 14.2759 4.21172 13.8509 5.22422L11.4884 10.7867L5.45088 11.2992C4.35088 11.3867 3.90088 12.7617 4.73838 13.4867L9.32588 17.4617L7.95088 23.3617C7.70088 24.4367 8.86338 25.2867 9.81338 24.7117L15.0009 21.5867Z" fill="#FC1C00"/>
                  </svg>
                </div>
                <div className='my-auto text-bold text-xl'>
                  {data.rating}
                </div>
                <div className='my-auto text-gray-500'>
                  Rating
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1'>
              <div className='flex justify-center'>
                <button className='px-16 py-4 border border-red-500 bg-red-500 text-white rounded-full text-xl' onClick={() => popupHandler(data.id)}>
                  Review Bookings
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className='grid grid-cols-4 mx-10 my-8'>
            <div className='flex'>
              <div>
                <img src={img2} className="w-12 h-12 rounded-full" alt="Profile" />
              </div>
              <div>
                <div className='text-bold mx-2'>
                  Booking ID
                </div>
                <div className='text-gray-500 mx-2'>
                  {data.id}
                </div>
              </div>
            </div>
            <div className='flex'>
              <div>
                <img src={img3} className="w-12 h-12 rounded-full" alt="Profile" />
              </div>
              <div>
                <div className='text-bold mx-2'>
                  Consultation Category
                </div>
                <div className='text-gray-500 mx-2'>
                  Startup consultation
                </div>
              </div>
            </div>
            <div className='flex'>
              <div>
                <img src={img4} className="w-14 h-12 rounded-full" alt="Profile" />
              </div>
              <div>
                <div className='text-bold mx-2'>
                  Session Time & date
                </div>
                <div className='text-gray-500 mx-2'>
                  {formatDate(data.date)}
                </div>
              </div>
            </div>
            <div className='flex'>
              <div>
                <img src={img5} className="w-12 h-12 rounded-full" alt="Profile" />
              </div>
              <div>
                <div className='text-bold mx-2'>
                  Booking Status
                </div>
                <div className={`mx-2 ${
                  data.booking_status === 'Completed' ? 'text-green-600 bg-green-200 rounded-full text-center mt-2' :
                  data.booking_status === 'pending' ? 'text-red-600 bg-red-200 rounded-full text-center mt-2 px-2' :
                  'text-gray-500'
                }`}>
                  {data.booking_status}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {pop &&
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg md:w-3/4">
            <div className='flex justify-between'>
              <div className='flex gap-2'>
                <div>
                  <img src={img6} className='w-12 h-12 rounded-full' alt="Profile" />
                </div>
                <div>
                  <div>Rekha Sahu</div>
                  <div>May 10 at 7:00 AM</div>
                </div>
              </div>
              <div className='flex gap-4'>
                <div>
                  <button className='px-6 py-3 bg-white border border-red-500 text-red-500 rounded-lg' onClick={() => closePopUp()}>Cancel</button>
                </div>
                <div>
                  <button className='px-6 py-3 bg-red-500 text-white rounded-lg'>Submit</button>
                </div>
              </div>
            </div>
            <div className='my-2'>
              <hr />
            </div>
            <div>
              <Review />
            </div>
          </div>
        </div>
      }
    </div>
  )
}
