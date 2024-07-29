import React from 'react'
import { Icons } from '../assets/Icons/Icons'

const StartupExp = () => {

        const cardData=[
            {
                title:"Business Strategy & Planning",
                tiles:["Market Research and Analysis",
                    "Go-to-Market Strategy",
                    "Product Strategy",
                    "Business Model Strategy",
                    "Business Strategy",
                    "Business Plan",
                ]
            },
    ]
  return (
    <div className='mx-4 my-4'>
        <div className='my-4 mx-4'>
            Area of Expertise
        </div>
        
        <div className='border-2 rounded-lg'>
            <div className='flex justify-between mx-4  text-gray-500 bg-gray-100 px-4 py-2 mx-0 '>
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
        <div>
            <div>

            </div>
            <div>

            </div>
        </div>
      
    </div>
  )
}

export default StartupExp
