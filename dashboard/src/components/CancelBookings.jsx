import React, { useState ,useEffect} from 'react'
import { Icons } from '../assets/Icons/Icons'
import img6  from '../assets/img/img6.jpeg'
import axios from 'axios';

const CancelBookings = ({id , bookingDetails}) => {
    console.log(id)

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [getAllBookings, setGetAllBookings] = useState([]);
    const [resultData, setResultData] = useState(null);
    const [cancelPop,setCancelPop]=useState(false);
    const [confirmPop,setConfirmPop]=useState(false)
    const [responseConfirm, setResponseConfirm] = useState(null);
    const [errorConfirm, setErrorConfirm] = useState(null);
    const [responseCancel,setResponseCancel]=useState(null)
    const [errorCancel,setErrorCancel]=useState(null)

  
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
    
      
    useEffect(()=>{
        const data = Array.isArray(response) ? response : [response];

     const targetId = id;
     
     try {
        const bookings = data[0]?.getAllBookings;
        if (Array.isArray(bookings)) {

          const result = bookings.filter(item => item.id === targetId);
        //   console.log(result);
        //   console.log(result[0])
          setResultData(result);
          console.log(resultData)
          
        } else {
          console.log('getAllBookings is not an array or does not exist.');
        }
      } catch (error) {
        console.log('An error occurred:', error);
      }
            
        
      },[response])

      
    
      const confirmBooking = async () => {
        setErrorConfirm(null);
    
        const data = {
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
            date: "2024-08-23T00:00:00Z",
            start_time: "2024-08-23T10:47:00Z",
            duration: 60
          },
          pricing_id: "jf;lajisgj",
          comment: "Did it by mistake",
          cancelled_by: "seeker",
          confirmed_by: "consultant",
          session_category: "startup",
          consultant_id: "48462f0f-e8ae-4872-bdf8-271c0f22727e",
          session_id: id,
          name: "Prakjlf",
          email: "Hello@mil.com",
          contact: "945512387",
          skillName: "letso",
          college_name: "II KGP",
          consultant_category: "startup",
          session_time: "ThirtyMinutes",
          session_price: "FiveHundred",
          location: "8906-3932",
          year: "890-3932",
          skill_id: "1753f6ce-ece0-46cb-a31b-448eba905b0a",
          education_id: "5e047016-2496-458e-b1f8-7a3d1b3e5727",
          employment_id: "9fa15ba6-4f8d-496d-a7f2-aab7c68e5b85",
          selected_parent_index: 1,
          selected_children_index: 0,
          selected_children_index_value: true
        };
    
        try {
          const result = await axios.put(`http://localhost:3000/api/consultationService/confirmBooking`, data);
          setResponseConfirm(result.data);
          setConfirmPop(false)
        } catch (err) {
          setErrorConfirm(err.message);
        } 
      };

      const cancelBooking = async () => {
        setErrorCancel(null);
    
        const data = {
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
            date: "2024-08-23T00:00:00Z",
            start_time: "2024-08-23T10:47:00Z",
            duration: 60
          },
          pricing_id: "jf;lajisgj",
          comment: "Did it by mistake",
          cancelled_by: "seeker",
          confirmed_by: "consultant",
          session_category: "startup",
          consultant_id: "48462f0f-e8ae-4872-bdf8-271c0f22727e",
          session_id: id,
          name: "Prakjlf",
          email: "Hello@mil.com",
          contact: "945512387",
          skillName: "letso",
          college_name: "II KGP",
          consultant_category: "startup",
          session_time: "ThirtyMinutes",
          session_price: "FiveHundred",
          location: "8906-3932",
          year: "890-3932",
          skill_id: "1753f6ce-ece0-46cb-a31b-448eba905b0a",
          education_id: "5e047016-2496-458e-b1f8-7a3d1b3e5727",
          employment_id: "9fa15ba6-4f8d-496d-a7f2-aab7c68e5b85",
          selected_parent_index: 1,
          selected_children_index: 0,
          selected_children_index_value: true
        };
    
        try {
          const result = await axios.put(`http://localhost:3000/api/consultationService/cancelBooking`, data);
          setResponseCancel(result.data);
          setCancelPop(false)
        } catch (err) {
          setErrorCancel(err.message);
        } 
      };

    // console.log(result);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
      };


  return (
    <div className=''>
      
      <div className='bg-gray-100 border-2 rounded-lg'>
        <div className='  p-2 flex justify-between'>
            <div className='flex gap-2'>
                <div className='my-auto text-xl font-bold'>
                Consultation Booking Details
                </div>
                <div>
                    <Icons.Tick/>  
                </div>

            </div>
            <div>
                <div className='flex gap-x-2'>
                    <div className=''>
                        <button className='border border-red-500 text-red-500 rounded-full py-2 px-4 bg-white'
                        onClick={()=>{setConfirmPop(true)}}>Confirm Booking</button>
                    </div>
                    <div>
                        <button className='border border-red-500 text-white rounded-full py-2 px-4 bg-red-500'
                        >Starts in 2 days</button>
                    </div>
                    <div>
                        <button className='border border-red-500 text-red-500 rounded-full py-2 px-4 bg-white'
                        onClick={() => setCancelPop(true)}>Cancel Booking</button>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='mx-2 text-gray-500'>
            Your consultation session is scheduled. Below are the details of your booking
        </div>
        <div className='mx-2 text-gray-500'>
         We have sent you an E-mail with the details.
        </div>
        <div>
            <div className='my-3 text-xl font-bold mx-2'>
                Booking Details
            </div>
            <div className='mx-2 grid grid-cols-2 gap-4'>
                <div className=''>
                    <div className='text-gray-500'>
                    Your booking ID
                    </div>
                    <div>
                    {bookingDetails.id}

                    </div>
                    <div className='text-gray-500'>
                    Consultation Fee
                    </div>
                    <div>
                    ₹1000

                    </div>

                </div>
                <div className='mt-2'>
                    <div className='text-gray-500'>
                    Your booking status
                    </div>
                    <div>
                    {bookingDetails.booking_status}

                    </div>
                    <div className='text-gray-500'>
                    Consultant Name
                    </div>
                    <div>
                    Riddhima Sen

                    </div>

                </div>
            </div>
            <div className='bg-white border px-2'>
                    <div className='flex justify-left my-4'>
                        <div>
                            <img src={img6} className='w-12 h-12 mx-2 rounded-full'></img>
                        </div>
                        <div>
                            <div>
                                Rekha Sahu
                            </div>
                            <div>
                                5 stars
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className='text-gray-500 w-3/4 mx-2 my-3'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor turpis sed diam mattis sodales nec ac ante. Sed accumsan eleifend tortor, non tempus libero varius ullamcorper. Vivamus commodo nisl et libero tempus convallis. Sed vitae mi imperdiet, viverra ante at, scelerisque est.
                        </div>

                    </div>
                    <div className='grid grid-cols-2 ml-2 mr-44 gap-10'>
                        <div className='flex gap-2'>
                            <div>
                                <Icons.Cal/>
                            </div>
                            <div className='my-auto'>
                            {formatDate(bookingDetails.date)}
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div>
                            <Icons.Cal2/>
                            </div>
                            <div className='my-auto'>
                              For Startup Consultation
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div>
                                <Icons.Cal3/>
                            </div>
                            <div className='my-auto'>
                                Wed at 7:00-8:00 AM
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div>
                                <Icons.Cal4/>
                            </div>
                            <div className='my-auto'>
                                Session Time : {bookingDetails.duration} min
                            </div>
                        </div>
                    </div>
            </div>
        </div>
      </div>
      {cancelPop &&
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
       <div className="bg-white p-6 rounded-lg md:w-3/4">
            <div className='flex justify-center'>
                <Icons.CancelPop/>
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
                            setCancelPop(false)
                        }}
                        >No keep</button>
                    </div>
                    <div>
                        <button className='text-white px-4 py-2 rounded-full bg-red-500'
                        onClick={()=>{
                            cancelBooking
                            setCancelPop(false)
                        }}
                        >Yes Cancel</button>
                    </div>
                </div>
            </div>
        
      </div>
    </div>}

    {confirmPop &&
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
       <div className="bg-white p-6 rounded-lg md:w-3/4">
            <div className='flex justify-center'>
                <Icons.ConfirmPop/>
            </div>
            <div>
                <div className='text-xl font-bold text-center my-2'>
                    Confirm Booking 
                </div>
                <div className='text-gray-500 text-center my-2'>
                    Do you confirm this booking? 
                </div>
                <div className='flex justify-center gap-4'>
                    <div>
                        <button className='text-black px-4 py-2 rounded-full bg-gray-100'
                        onClick={()=>{
                            setConfirmPop(false)
                        }}
                        >No Cancel</button>
                    </div>
                    <div>
                        <button className='text-white px-4 py-2 rounded-full bg-red-500'
                        onClick={confirmBooking}
                        >Yes Confirm</button>
                    </div>
                </div>
            </div>
        
      </div>
    </div>}
      
    </div>
  )
}

export default CancelBookings
