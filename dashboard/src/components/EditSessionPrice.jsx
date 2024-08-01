import React,{useState} from 'react'
import axios from 'axios';

const EditSessionPrice = ({id}) => {

    const SessionDuration = {
        ThirtyMinutes: "ThirtyMinutes",
        FortyFiveMinutes: "FortyFiveMinutes",
        OneHour: "OneHour",
        OneAndHalfHour: "OneAndHalfHour",
        TwoHours: "TwoHours",
    };

    const SessionPrice = {
        FiveHundred:"FiveHundred",
        OneThousand:"OneThousand",
        OneThousandFiveHundred:"OneThousandFiveHundred",
        TwoThousand:"TwoThousand"
    };

    const [sessionDuration, setSessionDuration] = useState(SessionDuration.ThirtyMinutes);
    const [sessionPrice,setSessionPrice] = useState(SessionPrice.FiveHundred);
    const [errorAdd,setErrorAdd] = useState(null);
    const [success, setSuccess] = useState(false);

    const editSessionData = async () => {
        
        setErrorAdd(null);
    
        const data = {
            session_time:sessionDuration,
            session_price:sessionPrice,
            consultant_id: "48462f0f-e8ae-4872-bdf8-271c0f22727e",
            consultant_category:"startup",
            consultantPricing_id:id
        };
    
        try {
          console.log(data)
          const result = await axios.put(`http://localhost:3000/api/consultationService/editSessionData`, data);
          setSuccess(true);
        } catch (err) {
          setErrorAdd(err.message);
          console.log(errorAdd)
        } 
      };

    const handleDurationChange = (event) => {
        const value = event.target.value;
        switch (value) {
            case '30 Min Session':
                setSessionDuration(SessionDuration.ThirtyMinutes);
                break;
            case '45 Min Session':
                setSessionDuration(SessionDuration.FortyFiveMinutes);
                break;
            case '01 hour Session':
                setSessionDuration(SessionDuration.OneHour);
                break;
            case '1.5 hour Session':
                setSessionDuration(SessionDuration.OneAndHalfHour);
                break;
            default:
                setSessionDuration(SessionDuration.ThirtyMinutes);
                break;
        }
    };

    const handlePriceChange = (event) => {
        const value = event.target.value;
        switch (value) {
            case 'Rs 500':
                setSessionPrice(SessionPrice.FiveHundred);
                break;
            case 'Rs 1000':
                setSessionPrice(SessionPrice.OneThousand);
                break;
            case 'Rs 1500':
                setSessionPrice(SessionPrice.OneThousandFiveHundred);
                break;
            case 'Rs 2000':
                setSessionPrice(SessionPrice.TwoThousand);
                break;
            default:
                setSessionPrice(SessionPrice.FiveHundred);
                break;
        }
    };



  return (
    <div>
        <div className='flex justify-between my-4'>
            <div className='text-gray-500 text-xl'>
                Add Session
            </div>
            <div className='flex gap-4'>
                <div>
                    <button className='text-red-500 px-4 py-2 border border-red-500 rounded-full'
                    >
                        Cancel
                    </button>
                </div>
                <div>
                    <button className='px-5 py-2 rounded-full text-white bg-red-500'
                    onClick={editSessionData}>
                        Save
                    </button>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-2'>
            <div>
                <div className='text-xl '>
                    Session Time
                </div>
                <div className='my-4'>
                    <select 
                        className='w-3/4 border-2 rounded-lg px-4 py-2' 
                        onChange={handleDurationChange}
                    >
                        <option>30 Min Session</option>
                        <option>45 Min Session</option>
                        <option>01 hour Session</option>
                        <option>1.5 hour Session</option>
                    </select>
                </div>

            </div>
            <div>
                <div className='text-xl'>
                    Session Price
                </div>
                <div className='my-4'>
                    <select 
                        className='w-3/4 border-2 rounded-lg px-4 py-2' 
                        onChange={handlePriceChange}
                    >
                        <option>Rs 500</option>
                        <option>Rs 1000</option>
                        <option>Rs 1500</option>
                        <option>Rs 2000</option>
                    </select>
                </div>
                <div>
                    {success && <div className='text-green-600 font-bold text-xl text-center'>
                        Success
                        </div>}
                </div>

            </div>
        </div>
        
      
    </div>
  )
}

export default EditSessionPrice
