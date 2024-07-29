import React, { useState } from 'react'
import { ProfileCard } from './ProfileCard'
import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'
import InputSm from './InputSm'
import EducationInfo from './EducationInfo'
import EmploymentInfo from './EmploymentInfo'
import SkillInfo from './SkillsInfo'

const ProfilePage = () => {
    
    
  return (
    <div>
        <Navbar></Navbar>
        <div className='flex'>
            <div className='w-1/4'>
                    <ProfileCard></ProfileCard>
                    <Sidebar></Sidebar>
            </div>
            <div className='w-3/4'>
                    <div className='grid grid-cols-2 mx-10'>
                        <div className='text-2xl my-auto'>
                            Profile Details
                        </div>
                        <div className='ml-auto text-xl'>
                            <button className='px-16 py-4 bg-red-500 text-white rounded-full'>Save</button>
                        </div>
                    </div>
                    <div>
                        <InputSm></InputSm>
                    </div>
                    <div>
                        <EducationInfo></EducationInfo>
                    </div>
                    <div className='my-10'>
                        <EmploymentInfo></EmploymentInfo>
                    </div>
                    <div className='my-10'>
                       <SkillInfo></SkillInfo>
                    </div>
            </div>
            
        </div>
    </div>
    
  )
}

export default ProfilePage
