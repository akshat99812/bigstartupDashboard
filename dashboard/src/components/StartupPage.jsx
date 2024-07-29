import React from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { ProfileCard } from './ProfileCard'
import StratupSessionPrices from './StratupSessionPrices'
import StartupDis from './StartupDis'
import StartupExp from './StartupExp'

const StartupPage = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex my-4'>
            <div className='w-1/4'>
                <ProfileCard/>
                <Sidebar/>
            </div>
            <div className='w-3/4'>
                <div className='flex justify-between px-4'>
                    <div className='text-2xl'>
                        Startup Consultation
                    </div>
                    <div>
                        <button className='bg-red-500  text-white px-8 py-2 text-xl rounded-full'>
                            Save
                        </button>
                    </div>

                </div>
                <StratupSessionPrices/>
                <StartupDis/>
                <StartupExp/>
            </div>

        </div>
        
      
    </div>
  )
}

export default StartupPage
