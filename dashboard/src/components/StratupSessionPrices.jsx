import React, { useState ,useEffect } from 'react'
import { Icons } from '../assets/Icons/Icons'
import axios from 'axios'
import AddSessionPrice from './AddSessionPrice'
import EditSessionPrice from './EditSessionPrice'

const StratupSessionPrices = () => {

    const [isAdding,setIsAdding]=useState(false)
    const [isEdditing,setIsEdditing]=useState(false)
    const [sessionDetails,setSessionDetails]=useState([])
    const [priceId,setPriceId]=useState(null);
    const [errorDelete,setErrorDelete] = useState(null);
    const [sessionDataId,setSetSessionId] = useState(null);
    const [editId,setEditId]=useState(null);

    useEffect(() => {

        const data = {
            session_category: "startup",
            consultant_id: "48462f0f-e8ae-4872-bdf8-271c0f22727e",
            session_id: "5928715c-ee15-46b2-adba-be958087d59f",
            consultant_category: "startup",
          };
    
        axios.post('http://localhost:3000/api/consultationService/getAllDetails', data)
          .then(response => {
            console.log('Response:', response.data);
            setSessionDetails(response.data.sessionPricingDetails)
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }, []);

    const addSessionData=()=>{
        setIsAdding(false)
    }

    const handleEdit=(details)=>{

        setEditId(details);
        setIsEdditing(true)
        console.log(editId)

    }

    const deleteSessionData = async (id) => {
        
        setErrorDelete(null);
    
        const data = {
            session_data_id:id,
            consultant_id: "48462f0f-e8ae-4872-bdf8-271c0f22727e",
        };
    
        try {
          const result = await axios.delete(`http://localhost:3000/api/consultationService/deleteSessionData`,{
            data:data
          });
          console.log(result)
        } catch (err) {
          setErrorDelete(err.message);
          console.log(errorDelete)
        } 
      };


    const SessionDuration = {
        ThirtyMinutes: "ThirtyMinutes",
        FortyFiveMinutes: "FortyFiveMinutes",
        OneHour: "OneHour",
        OneAndHalfHour: "OneAndHalfHour",
        TwoHours: "TwoHours",
    };
    
    const getSessionDuration = (duration) => {
        switch (duration) {
            case SessionDuration.ThirtyMinutes:
                return 30;
            case SessionDuration.FortyFiveMinutes:
                return 45;
            case SessionDuration.OneHour:
                return 60;
            case SessionDuration.OneAndHalfHour:
                return 90;
            case SessionDuration.TwoHours:
                return 120;
            default:
                return 0; 
        }
    };

    const SessionPrice = {
        FiveHundred:"FiveHundred",
        OneThousand:"OneThousand",
        OneThousandFiveHundred:"OneThousandFiveHundred",
        TwoThousand:"TwoThousand"
    };
    
    const getSessionPrice = (duration) => {
        switch (duration) {
            case SessionPrice.FiveHundred:
                return 500;
            case SessionPrice.OneThousand:
                return 1000;
            case SessionPrice.OneThousandFiveHundred:
                return 1500;
            case SessionPrice.TwoThousand:
                return 2000;
            default:
                return 0; 
        }
    };


  return (
    <div  className='mx-4 my-4 '>
        <div className='my-4 mx-4'>
            Session Prices
        </div>
        <div className='border-2 rounded-lg'>
            <div className='flex justify-between px-8 text-gray-500 bg-gray-100 px-4 py-2 mx-0 '>
                <div className='my-auto'>
                    Session Time
                </div>
                <div className='my-auto'>
                    Session Price
                </div>
                <div>
                    <button className='bg-red-500 text-white py-2 px-2  hover:bg-red-600 rounded-full  text-sm my-auto'
                    onClick={()=>{
                        setIsAdding(true)
                    }}>
                        <div className='flex gap-2'>
                            <div className='my-auto'>
                                Add
                            </div>
                            <div className='my-auto'>
                                <Icons.Add/>
                            </div>
                        </div>
                    </button>
                </div>

            </div>
            {sessionDetails.map((data)=>{
                return(
                    <div>
                        <div className='grid grid-cols-3  mx-4  text-gray-500 px-4 py-2 mx-0 '>

                            <div className='my-auto '>
                                {getSessionDuration(data.session_duration)} Minutes Session
                            </div>
                            <div className='my-auto mx-auto'>
                                Rs. {getSessionPrice(data.session_price)}
                            </div>
                            
                            <div className='flex gap-4 my-auto mx-auto'>
                            <button 
                                className='px-2 py-2 border rounded-full drop-shadow-lg'
                                onClick={() => handleEdit(data.id)}
                            >
                                <Icons.Pen/>
                            </button>
                            <button className='px-2 py-2 border rounded-full drop-shadow-lg' 
                            onClick={() => deleteSessionData(data.id)}>
                                <Icons.Trash/>
                            </button>
                            </div>
                         </div> 

                    </div> 
                )
            })}

            {isAdding && 
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg md:w-3/4">
                     <div>
                        <button className='bg-red-500 rounded-full px-4 py-2 text-white'
                        onClick={()=>{setIsAdding(false)}}>Close</button>
                    </div>
                    <AddSessionPrice ></AddSessionPrice>
                 
                    </div>
                </div>
                }

                {isEdditing && 
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg md:w-3/4">
                     <div>
                        <button className='bg-red-500 rounded-full px-4 py-2 text-white'
                        onClick={()=>{setIsEdditing(false)}}>Close</button>
                    </div>
                    <EditSessionPrice id={editId}></EditSessionPrice>
                 
                    </div>
                </div>
                }
            
        </div>
      
    </div>
  )
}

export default StratupSessionPrices
