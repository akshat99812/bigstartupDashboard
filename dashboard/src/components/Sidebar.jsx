
import {Link,useLocation} from 'react-router-dom'
import { Icons } from '../assets/Icons/Icons'

export const Sidebar = () => {
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile';
  const isCalenderPage = location.pathname === '/calendar';
  const isBookingsPage = location.pathname === '/';
  const isStartupPage = location.pathname === '/startup';
  const isTestPage = location.pathname === '/testimonials';
  const isCareerPage = location.pathname === '/career';
  const isBankPage = location.pathname === '/bank';
  const isEarningsPage = location.pathname === '/earnings';


  return (
    <div className='text-center my-5'>
      <nav>
        <ul>
        <li className={`text-xl mt-2 ${isBookingsPage ? 'text-red-500' : 'text-slate-500'}`}>
            <Link to={"/"}>
              <div className='grid grid-cols-3 mx-10 gap-4'>
                <div className=' ml-auto'>
                  {isBookingsPage ? <Icons.BookingsRed /> : <Icons.BookingsBlack />}
                </div>
                <div className='my-auto col-span-2 text-left'>
                  Bookings Page
                </div>   
              </div>
               
            </Link>
          </li>
        
        
          <li className={`text-xl mt-2 ${isCalenderPage ? 'text-red-500' : 'text-slate-500'}`}>
            <Link to={"/calendar"}>
              <div className='grid grid-cols-3 mx-10 gap-4' >
                <div className='ml-auto '>
                  {isCalenderPage ? <Icons.RedCalendar /> : <Icons.Calendar />}
                </div>
                <div className='my-auto col-span-2 text-left'>
                  Booking Calender
                </div>   
              </div>
               
            </Link>
          </li>
        
        
          <li className={`text-xl mt-2 ${isProfilePage ? 'text-red-500' : 'text-slate-500'}`}>
            <Link to={"/profile"}>
              <div className='grid grid-cols-3 mx-10 gap-4'>
                <div className=' ml-auto'>
                  {isProfilePage ? <Icons.RedProfile /> : <Icons.Profile />}
                </div>
                <div className='my-auto col-span-2 text-left'>
                  Profile Settings
                </div>   
              </div>
               
            </Link>
          </li>
        
        
          <li className={`text-xl mt-2 ${isStartupPage ? 'text-red-500' : 'text-slate-500'}`}>
            <Link to={"/startup"}>
              <div className='grid grid-cols-3 mx-10 gap-4'>
                <div className=' ml-auto'>
                  {isStartupPage ? <Icons.RedStartup/> : <Icons.Startup />}
                </div>
                <div className='my-auto col-span-2 text-left'>
                  Startup Consulation
                </div>   
              </div>
               
            </Link>
          </li>

          <li className={`text-xl mt-2 ${isCareerPage ? 'text-red-500' : 'text-slate-500'}`}>
            <Link to={"/career"}>
              <div className='grid grid-cols-3 mx-10 gap-4'>
                <div className=' ml-auto'>
                  {isCareerPage ? <Icons.RedCareer/> : <Icons.Career />}
                </div>
                <div className='my-auto col-span-2 text-left'>
                 Career Consultation
                </div>   
              </div>
               
            </Link>
          </li>

        

          <li className={`text-xl mt-2 ${isTestPage ? 'text-red-500' : 'text-slate-500'}`}>
            <Link to={"/testimonials"}>
              <div className='grid grid-cols-3 mx-10 gap-4'>
                <div className=' ml-auto'>
                  {isTestPage ? <Icons.RedTestimonials /> : <Icons.BlackTestimonials />}
                </div>
                <div className='my-auto col-span-2 text-left'>
                  Testimonials
                </div>   
              </div>
               
            </Link>
          </li>

          <li className={`text-xl mt-2 ${isEarningsPage ? 'text-red-500' : 'text-slate-500'}`}>
            <Link to={"/earnings"}>
              <div className='grid grid-cols-3 mx-10 gap-4'>
                <div className=' ml-auto'>
                  {isEarningsPage ? <Icons.RedEarnings /> : <Icons.Earnings />}
                </div>
                <div className='my-auto col-span-2 text-left'>
                  Earnings
                </div>   
              </div>
               
            </Link>
          </li>

          <li className={`text-xl mt-2 ${isBankPage ? 'text-red-500' : 'text-slate-500'}`}>
            <Link to={"/bank"}>
              <div className='grid grid-cols-3 mx-10 gap-4'>
                <div className=' ml-auto'>
                  {isBankPage ? <Icons.RedBank /> : <Icons.Bank />}
                </div>
                <div className='my-auto col-span-2 text-left'>
                  Bank Details
                </div>   
              </div>
               
            </Link>
          </li>
        
          <hr className='mx-10 mt-4'></hr>

          <li className="text-xl mt-2 text-slate-500">
            <Link to={"/support"}>Support</Link>
          </li>
          </ul>
      </nav>
    </div>
  )
}

