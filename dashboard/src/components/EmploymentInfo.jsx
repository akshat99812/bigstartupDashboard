import React, { useState } from 'react';
import { Icons } from '../assets/Icons/Icons';

const empcationInfo = () => {
  const [empData, setempData] = useState([
    {
      id: 1,
      name: "Technical Writer | HexaCorp Technical service",
      location: "Bareilly, India",
      year: "2019 - 2020",
      year1: 2019,
      year2: 2020,
      remarks: "I did my schooling from Bareilly, UttarPradesh",
    },
    {
      id: 2,
      name: "Rakshpal Bahadur Institute of Management",
      location: "Bareilly, India",
      year: "2019 - 2020",
      year1: 2019,
      year2: 2020,
      remarks: "I did my schooling from Bareilly, UttarPradesh",
    }
  ]);

  const [editingemp, setEditingemp] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newemp, setNewemp] = useState({
    name: "",
    location: "",
    year: "",
    remarks: ""
  });

  const handleEdit = (emp) => {
    setEditingemp({ ...emp });
  };

  const handleInputChange = (field, value) => {
    setEditingemp({ ...editingemp, [field]: value });
  };

  const handleSave = () => {
    setempData(empData.map(emp => 
      emp.id === editingemp.id ? editingemp : emp
    ));
    setEditingemp(null);
  };

  const handleAdd = () => {
    const newId = Math.max(...empData.map(emp => emp.id)) + 1;
    setempData([...empData, { ...newemp, id: newId }]);
    setIsAdding(false);
    setNewemp({ name: "", location: "", year: "", remarks: "" });
  };

  const handleNewInputChange = (field, value) => {
    setNewemp({ ...newemp, [field]: value });
  };

  const handleCancel = () => {
    setEditingemp(null);
    setIsAdding(false);
  };

  const handleDelete = (id) => {
    setempData(empData.filter(emp => emp.id !== id));
  };

  return (
    <div className='mx-10 relative'>
      <div className='text-2xl font-bold'>
        Employment History
      </div>
      <div className='border rounded-lg'>
        <div className='flex justify-between px-10 border rounded-lg bg-gray-100'>
          <div className='py-4 text-gray-500'>
            Add your employment history history, mention all the details correctly
          </div>
          <div className='my-auto'>
            <button className='bg-red-500 px-4 py-1 rounded-full' onClick={() => setIsAdding(true)}>
              <div className='flex gap-2'>
                <div className='text-white'>
                  Add
                </div>
                <div>
                  <Icons.Add/>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className='mx-10 my-4'>
          {empData.map((emp) => (
            <div key={emp.id}>
              <div className='flex justify-between'>
                <div>
                  <div className='text-xl'>
                    {emp.name}
                  </div>
                  <div className='text-gray-500'>
                    {emp.location}
                  </div>
                  <div className='text-gray-500'>
                    <div className='flex gap-2'>
                      <div>
                        {emp.year1}
                      </div>
                      <div>
                        -
                      </div>
                      <div>
                        {emp.year2}
                      </div>
                    </div>
                    
                  </div>
                  <div className='text-gray-500'>
                    {emp.remarks}
                  </div>
                </div>
                <div className='flex gap-4 my-auto'>
                  <button 
                    className='px-2 py-2 border rounded-full drop-shadow-lg'
                    onClick={() => handleEdit(emp)}
                  >
                    <Icons.Pen/>
                  </button>
                  <button className='px-2 py-2 border rounded-full drop-shadow-lg' onClick={() => handleDelete(emp.id)}>
                    <Icons.Trash/>
                  </button>
                </div>
              </div>
              <hr className='my-2' />
            </div>
          ))}
        </div>
      </div>

      {(editingemp || isAdding) && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-6 rounded-lg md:w-1/2'>
            <div className='flex justify-between mx-10'>
              <div>
                <h2 className='text-xl font-bold mb-4'>
                  {isAdding ? 'Add employment history' : 'Edit employment history'}
                </h2>
              </div>
              <div className='flex justify-end gap-2'>
              <button 
                className='px-4 py-2 text-red-500 border border-red-500 rounded-full'
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button 
                className='px-6 py-2 bg-red-500 text-white border border-red-500 rounded-full'
                onClick={isAdding ? handleAdd : handleSave}
              >
                {isAdding ? 'Add' : 'Save'}
              </button>
            </div>

            </div>
          
            <div className='my-4'>
              <div className='mb-2 text-xl'>
                Company
              </div>
              <div>
                <input 
                className='w-full border rounded px-2 py-1 mb-2'
                value={isAdding ? newemp.name : editingemp.name}
                onChange={(e) => isAdding ? handleNewInputChange('name', e.target.value) : handleInputChange('name', e.target.value)}
                placeholder="Company Name"
              />
              
              </div>

            </div>

            <div>
              <div>
                Dates Attended
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <input 
                        className='w-full border rounded px-2 py-1 mb-2'
                        value={isAdding ? newemp.year1 : editingemp.year1}
                        onChange={(e) => isAdding ? handleNewInputChange('year', e.target.value) : handleInputChange('year', e.target.value)}
                        placeholder="From Year"
                      />
                </div>
                <div>
                    <input 
                      className='w-full border rounded px-2 py-1 mb-2'
                      value={isAdding ? newemp.year2 : editingemp.year2}
                      onChange={(e) => isAdding ? handleNewInputChange('year', e.target.value) : handleInputChange('year', e.target.value)}
                      placeholder="To Year"
                    />
                </div>

              </div>
            </div>

            
            <div className='mt-4 mb-2'>
              Location
            </div>
            <input 
              className='w-full border rounded px-2 py-1 mb-2'
              value={isAdding ? newemp.location : editingemp.location}
              onChange={(e) => isAdding ? handleNewInputChange('location', e.target.value) : handleInputChange('location', e.target.value)}
              placeholder="Location"
            />
            
            <div className='mt-4 mb-2'>
              Description
            </div>
            <textarea 
              className='w-full border rounded px-2 py-1 mb-4'
              value={isAdding ? newemp.remarks : editingemp.remarks}
              onChange={(e) => isAdding ? handleNewInputChange('remarks', e.target.value) : handleInputChange('remarks', e.target.value)}
              placeholder="Remarks"
              rows="3"
            />
            
          </div>
        </div>
      )}
    </div>
  );
};

export default empcationInfo;