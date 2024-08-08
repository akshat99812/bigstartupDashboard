import React,{useEffect, useState, useCallback, useMemo} from 'react'
import { Icons } from '../assets/Icons/Icons'
import axios from 'axios'

const initialSkills = [
    { "ID": "1", "slug": "logo-design", "name": "Logo Design", "checked": false },
    { "ID": "2", "slug": "animation", "name": "Animation", "checked": false },
    { "ID": "3", "slug": "art-illustration", "name": "Art & Illustration", "checked": false },
    { "ID": "4", "slug": "audio-production", "name": "Audio Production", "checked": false },
    { "ID": "5", "slug": "logo-design", "name": "Logo Design", "checked": false },
    { "ID": "6", "slug": "animation", "name": "Animation", "checked": false },
    { "ID": "7", "slug": "art-illustration", "name": "Art & Illustration", "checked": false },
    { "ID": "8", "slug": "audio-production", "name": "Audio Production", "checked": false },
]
const StartupExp = () => {
      
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(true)
    const [x, setX] = useState(initialSkills)

    const fetchData = useCallback(async () => {
        try {
            const result = await axios.post(`http://localhost:3000/api/consultationService/getSelectedData`, {
                "consultant_id": "f5b129bc-a727-4059-ba96-0311d272718a"
            });
            setResponse(result.data.response);
        } catch (err) {
            console.error("Error fetching data: ", err);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        if (response) {
            setX(prevX => prevX.map((item, index) => ({
                ...item,
                checked: response.some(r => r.specialization_cat_id - 1 === index)
            })));
            setLoading(false);
        }
    }, [response]);

        const addHandler = useCallback(async (id) => {
            try {
                await axios.post(`http://localhost:3000/api/consultationService/select`, {
                    "parent_id": 1,
                    "children_id": parseInt(id),
                    "consultant_id": "f5b129bc-a727-4059-ba96-0311d272718a",
                    "consultant_cat": "startup"
                });
                fetchData();
            } catch (err) {
                console.log(err);
            }
        }, [fetchData]);
    
        const deleteHandler = useCallback(async (id) => {
            const payloadElement = response.find(element => element.specialization_cat_id == id);
            try {
                await axios.post(`http://localhost:3000/api/consultationService/deleteSelect`, {
                    "parent_id": payloadElement.parent_cat_id,
                    "children_id": payloadElement.specialization_cat_id,
                    "consultant_id": payloadElement.consultantId,
                    "id": payloadElement.unique_id
                });
                fetchData();
            } catch (err) {
                console.log(err);
            }
        }, [response, fetchData]);

      const skillsList = useMemo(() => x.map(skill => (
        <div key={skill.ID}>
            <div className='flex justify-between mx-4'>
                <div>{skill.name}</div>
                <div>
                    {!skill.checked ? (
                        <button onClick={() => addHandler(skill.ID)}>+</button>
                    ) : (
                        <button onClick={() => deleteHandler(skill.ID)}>
                            <Icons.RedTick />
                        </button>
                    )}
                </div>
            </div>
        </div>
    )), [x, addHandler, deleteHandler]);
      

    if(loading){
        return <div>
            Loading Data...
        </div>
    }

  return (
    <div className='mx-4 my-4'>
        <div className='my-4 mx-4'>
            Area of Expertise
        </div>
        
        <div className='border-2 rounded-lg'>
            <div className='flex justify-between px-8  text-gray-500 bg-gray-100  py-2 mx-0 '>
                <div className='my-auto'>
                    Business Strategy & Planning
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
        </div>
        <div className='border rounded-lg  '>
            <div className='grid grid-cols-2 mx-4 my-2 text-gray-500 gap-y-2'>
                {skillsList}
            </div>
        </div>
      
    </div>
  )
}

export default StartupExp
