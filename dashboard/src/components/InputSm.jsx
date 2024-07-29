import React, { useState } from 'react'
import { Icons } from '../assets/Icons/Icons'

const InputSm = () => {

    const [data,setData]=useState({
        name:'',
        email:'',
        contact:'',
        exp:'',
    })

    const [isSubmitted,setIsSubmitted]=useState({
        name:false,
        email:false,
        contact:false,
        exp:false,
    })

    const [isValidContact,setIsValidContact]=useState(true);
    const [isValidEmail, setIsValidEmail] = useState(false);

    const nameHandler=(e)=>{
        setData({...data,name:e.target.value});
        
    }

    const expHandler=(e)=>{
        setData({...data,exp:e.target.value});
        
    }

    const contactHandler = (e) => {
        const input = e.target.value;
        
        if (/^\d*$/.test(input) && input.length <= 10) {
          setData(prevData => ({ ...prevData, contact: input }));
          setIsSubmitted(prevSubmitted => ({ ...prevSubmitted, contact: false }));
          setIsValidContact(input.length === 10);
        }
      };
      
      const handleContactSubmit = () => {
        setIsSubmitted(prevSubmitted => ({ ...prevSubmitted, contact: true }));
        
        if (data.contact.length !== 10) {
          console.log("Please enter a valid 10-digit mobile number");
          setIsValidContact(false);
        } else {
          console.log("Valid mobile number:", data.contact);
          setIsValidContact(true);
        }
      };

      const emailHandler = (e) => {
        const input = e.target.value;
        
        setData(prevData => ({ ...prevData, email: input }));
        setIsSubmitted(prevSubmitted => ({ ...prevSubmitted, email: false }));
      };
      
      const handleEmailSubmit = () => {
        setIsSubmitted(prevSubmitted => ({ ...prevSubmitted, email: true }));
        
        // Simple regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(data.email)) {
          console.log("Please enter a valid email address");
          setIsValidEmail(false);
        } else {
          console.log("Valid email:", data.email);
          setIsValidEmail(true);
        }
      };
      

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mx-10 md:gap-10 my-4'>
        <div>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <div>
                        <Icons.Name/>
                    </div>
                    <div className='my-auto text-gray-600'>
                        Name
                    </div>
                </div>
                <div>
                    <button onClick={()=>setIsSubmitted({...isSubmitted,name:true})}>
                        <div className='flex bg-black rounded-full px-2 gap-1'>
                            <div className='text-white'>
                                Save
                            </div>
                            <div className='my-auto'>
                                <Icons.Save/>
                            </div>
                        </div>
                    </button>
                </div>
                
            </div>
            <div>
                <input className='w-full border rounded-lg p-2 my-2' onChange={nameHandler}></input>
            </div>
            {isSubmitted.name &&!data.name && (
                <div className='text-red-500'>
                Please check your name !
                </div>
            )}
        </div>
        <div>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <div>
                        <Icons.Exp/>
                    </div>
                    <div className='my-auto text-gray-600'>
                        Experience
                    </div>
                </div>
                <div>
                    <button onClick={()=>setIsSubmitted({...isSubmitted,exp:true})}>
                        <div className='flex bg-black rounded-full px-2 gap-1'>
                            <div className='text-white'>
                                Save
                            </div>
                            <div className='my-auto'>
                                <Icons.Save/>
                            </div>
                        </div>
                    </button>
                </div>
                
            </div>
            <div>
                <input className='w-full border rounded-lg p-2 my-2'></input>
            </div>
        </div>
        <div>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <div>
                        <Icons.Contact/>
                    </div>
                    <div className='my-auto text-gray-600'>
                        Contact
                    </div>
                </div>
                <div>
                    <button onClick={handleContactSubmit}>
                        <div className='flex bg-black rounded-full px-2 gap-1'>
                            <div className='text-white'>
                                Save
                            </div>
                            <div className='my-auto'>
                                <Icons.Save/>
                            </div>
                        </div>
                    </button>
                </div>
                
            </div>
            <div>
                <input className='w-full border rounded-lg p-2 my-2' onChange={contactHandler}></input>
            </div>
            {isSubmitted.contact && !isValidContact && (
            <div className='text-red-500'>
                Please check your contact number!
            </div>
            )}
        </div>
        <div>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <div>
                        <Icons.Email/>
                    </div>
                    <div className='my-auto text-gray-600'>
                        E-mail
                    </div>
                </div>
                <div>
                    <button onClick={handleEmailSubmit}>
                        <div className='flex bg-black rounded-full px-2 gap-1'>
                            <div className='text-white'>
                                Save
                            </div>
                            <div className='my-auto'>
                                <Icons.Save/>
                            </div>
                        </div>
                    </button>
                </div>
                
            </div>
            <div>
                <input className='w-full border rounded-lg p-2 my-2' onChange={emailHandler}></input>
            </div>
            {isSubmitted.email && !isValidEmail && (
            <div className='text-red-500'>
                Please enter a valid email address!
            </div>
            )}
        </div>
    </div>
  )
}

export default InputSm
