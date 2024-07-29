import React from 'react'
import { useParams, useLocation } from 'react-router-dom';

export default function IdComponent() {
    const dataUpcoming = [
        {   
            id:1,
            rating:5,
            imgUrl:'img2',
            bookingId:123456,
            name:"Rekha Sahu",
            date:"Wed, May 10,2024 (7:00-8:00 PM)",
            status:"ongoing",
        },
        {   id:2,
            rating:4.5,
            imgUrl:'img3',
            bookingId:1245456,
            name:"Akshat Patel",
            date:"Wed, May 10,2024 (7:00-8:00 PM)",
            status:"cancelled",
        },
        {
            id:3,
            rating:4.5,
            imgUrl:'img3',
            bookingId:1245456,
            name:"Akshat Patel",
            date:"Wed, May 10,2024 (7:00-8:00 PM)",
            status:"confirmed",
        },
      
        ]
        const dataPast = [
            {   
                id:1,
                rating:5,
                imgUrl:'img2',
                bookingId:123456,
                name:"Rekha Sahu",
                date:"Wed, May 10,2024 (7:00-8:00 PM)",
                status:"Completed",
            },
            {   
                id:2,
                rating:4.5,
                imgUrl:'img3',
                bookingId:1245456,
                name:"Akshat Patel",
                date:"Wed, May 10,2024 (7:00-8:00 PM)",
                status:"Not Completed",
            },
            {   
                id:3,
                rating:4.5,
                imgUrl:'img3',
                bookingId:1245456,
                name:"Akshat Patel",
                date:"Wed, May 10,2024 (7:00-8:00 PM)",
                status:"Completed",
            },
          
            ]
    const { id } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const validity = searchParams.get('validity') === 'true';

    const selectedData = validity ? 
        dataUpcoming.find(item => item.id === parseInt(id)) : 
        dataPast.find(item => item.id === parseInt(id));

    if (!selectedData) {
        return <div>No booking found for this ID.</div>;
    }

  return (
    <div>
            <div>Booking Id: {selectedData.bookingId}</div>
            <div>Name: {selectedData.name}</div>
            <div>Date: {selectedData.date}</div>
            <div>Status: {selectedData.status}</div>
            <div>Rating: {selectedData.rating}</div>
            <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Consultation Booking Details</h2>
        <span className="text-green-600 text-2xl">✔️</span>
      </div>
      <p className="mt-2 text-gray-600">Your consultation session is scheduled. Below are the details of your booking.</p>
      <p className="text-gray-600">We have sent you an E-mail with the details.</p>

      <div className="mt-4 border-t pt-4">
        <h3 className="text-lg font-semibold">Booking Details</h3>
        <div className="mt-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Your booking ID</span>
            <span className="font-semibold">{selectedData.bookingId}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-600">Consultation Fee</span>
            <span className="font-semibold">{selectedData.fee}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-600">Your booking status</span>
            <span className={`font-semibold ${selectedData.status === 'Confirmed' ? 'text-green-600' : selectedData.status === 'Cancelled' ? 'text-red-600' : 'text-yellow-600'}`}>{selectedData.status}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-600">Consultant Name</span>
            <span className="font-semibold">{selectedData.consultantName}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 border-t pt-4 flex items-center">
        <img src={selectedData.consultantImage} alt="Consultant" className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h4 className="text-lg font-semibold">{selectedData.consultantName}</h4>
          <p className="text-sm text-gray-600"><span className="text-red-600">⭐ {selectedData.rating}</span> Rating</p>
          <p className="text-gray-600 mt-2">{selectedData.consultantDescription}</p>
        </div>
      </div>

      <div className="mt-4 border-t pt-4 flex flex-col">
        <div className="flex items-center mt-2">
          <span className="material-icons text-gray-600 mr-2">event</span>
          <span>{selectedData.date}</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="material-icons text-gray-600 mr-2">schedule</span>
          <span>{selectedData.time}</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="material-icons text-gray-600 mr-2">description</span>
          <span>{selectedData.sessionType}</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="material-icons text-gray-600 mr-2">timer</span>
          <span>{selectedData.duration}</span>
        </div>
      </div>

      <div className="mt-4 flex justify-between">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Confirm Booking</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Cancel Booking</button>
      </div>
    </div>
    </div>
  )
}


