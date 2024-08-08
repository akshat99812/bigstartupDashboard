import React, { useState , useEffect} from 'react'
import { Icons } from '../assets/Icons/Icons'
import  axios  from 'axios'

const StartupDis = () => {

    const comments=[
        "As a dedicated UI/UX designer, I specialize in creating seamless and intuitive interfaces that enhance user experiences. With a passion for problem-solving and a keen eye for detail, I strive to design solutions that are both functional and visually appealing."
        
    ]

    
    const [comment, setComment] = useState(["As a dedicated UI/UX designer, I specialize in creating seamless and intuitive interfaces that enhance user experiences. With a passion for problem-solving and a keen eye for detail, I strive to design solutions that are both functional and visually appealing."]);
    const [isAdding, setIsAdding] = useState(false);
    const [isEdditing, setIsEdditing] = useState(false);
    const [errorUpdate,setErrorUpdate] = useState(null);
    const [description,setDescription] = useState(null);
    const [description2,setDescription2] = useState(null);

    const handleEdit = () => {
       setIsEdditing(false);
       updateDescription();  
    }

    useEffect(() => {

        const data = {
            gender: "male",
            experience: 2,
            user_slug: "hellti",
            verification_status: true,
            description: description,
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
            session_id: "5928715c-ee15-46b2-adba-be958087d59f",
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
    
        axios.post('http://localhost:3000/api/consultationService/getDescription', data)
          .then(response => {
            setDescription2(response.data.startupConsultant.description)
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }, [description,description2]);
   

    const updateDescription = async () => {
        
        setErrorUpdate(null);
    
        const data = {
          gender: "male",
          experience: 2,
          user_slug: "hellti",
          verification_status: true,
          description: description,
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
          session_id: "5928715c-ee15-46b2-adba-be958087d59f",
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
          const result = await axios.put(`http://localhost:3000/api/consultationService/updateDescription`, data);
          setIsEdditing(false)
        } catch (err) {
          setErrorUpdate(err.message);
          console.log(errorUpdate)
        } 
      };

  return (
    <div  className='mx-4 my-4 '>
        <div className='my-4 mx-'>
            Description
        </div>
        <div className='border-2 rounded-lg'>
            <div className='flex justify-between px-8  text-gray-500 bg-gray-100 py-2 mx-0 '>
                <div className='my-auto'>
                Add your education history, mention all the details correctly
                </div>
                <div>
                    <button className='bg-red-500 text-white py-2 px-2  hover:bg-red-600 rounded-full  text-sm my-auto'
                    onClick={() => {setIsAdding(true)}}>
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
                    <div >
                        <div className='flex justify-between  mx-4  text-gray-500 px-4 py-2 mx-0 '>
                            
                            <div className='my-auto w-4/5 '>
                                {description2}
                            </div>
                            
                            <div className='flex justify-center gap-4 my-auto mx-auto w-1/5'>
                            <button 
                                className='px-2 py-2 border rounded-full drop-shadow-lg'
                                onClick={() => setIsEdditing(true)}
                            >
                                <Icons.Pen/>
                            </button>
                            <button className='px-2 py-2 border rounded-full drop-shadow-lg' onClick={() => handleDelete(edu.id)}>
                                <Icons.Trash/>
                            </button>
                            </div>
                         </div> 

                    </div>
            
        </div>
        {isAdding && 
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg md:w-1/2">
        <div>
            <input className='border-2 border-gray-300 px-4 py-2 rounded-md my-4 w-full'></input>
        </div>

         <div>
             <button onClick={() => setIsAdding(false)}
             className="bg-red-500 text-white px-4 py-2 rounded-md">Close</button>
         </div>
       </div>
     </div>}
     {isEdditing && 
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg md:w-1/2">
        <div>
            <input className='border-2 border-gray-300 px-4 py-2 rounded-md my-4 w-full'
            onChange={(e)=>{
                setDescription(e.target.value);
                console.log(description)
            }}></input>
        </div>

         
        <div className='flex justify-center gap-4'>
        <div>
             <button onClick={() => setIsEdditing(false)}
             className="bg-red-500 text-white py-2 px-4 hover:bg-red-600 rounded-full  text-sm my-auto">Close</button>

         </div>
         <div>
         <button className='bg-red-500 text-white py-2 px-2 hover:bg-red-600 rounded-full  text-sm my-auto'
                    onClick={() => {handleEdit()}}>
                        <div className='flex gap-2'>
                            <div className='my-auto'>
                                Edit
                            </div>
                            <div className='my-auto'>
                                <Icons.Add/>
                            </div>
                        </div>
                    </button>
        </div>
        </div>
       </div>
     </div>}
      
    </div>
  )
}

export default StartupDis
