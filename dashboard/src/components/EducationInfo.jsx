import React, { useState } from 'react';
import { Icons } from '../assets/Icons/Icons';

const EducationInfo = () => {
  const [eduData, setEduData] = useState([
    {
      id: 1,
      name: "Woodrow sen. sec. school",
      location: "Bareilly, India",
      year: "2019 - 2020",
      year1: 2019,
      year2: 2020,
      remarks: "I did my schooling from Bareilly, UttarPradesh",
      degree:"B.tech",
    },
    {
      id: 2,
      name: "Rakshpal Bahadur Institute of Management",
      location: "Bareilly, India",
      year: "2019 - 2020",
      year1: 2019,
      year2: 2020,
      remarks: "I did my schooling from Bareilly, UttarPradesh",
      degree:"B.tech Phd",
    }
  ]);

  const [editingEdu, setEditingEdu] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newEdu, setNewEdu] = useState({
    name: "",
    location: "",
    year: "",
    remarks: ""
  });

  const handleEdit = (edu) => {
    setEditingEdu({ ...edu });
  };

  const handleInputChange = (field, value) => {
    setEditingEdu({ ...editingEdu, [field]: value });
  };

  const handleSave = () => {
    setEduData(eduData.map(edu => 
      edu.id === editingEdu.id ? editingEdu : edu
    ));
    setEditingEdu(null);
  };

  const handleAdd = () => {
    const newId = Math.max(...eduData.map(edu => edu.id)) + 1;
    setEduData([...eduData, { ...newEdu, id: newId }]);
    setIsAdding(false);
    setNewEdu({ name: "", location: "", year: "", remarks: "" });
  };

  const handleNewInputChange = (field, value) => {
    setNewEdu({ ...newEdu, [field]: value });
  };

  const handleCancel = () => {
    setEditingEdu(null);
    setIsAdding(false);
  };

  const handleDelete = (id) => {
    setEduData(eduData.filter(edu => edu.id !== id));
  };

  return (
    <div className='mx-10 relative'>
      <div className='text-2xl font-bold'>
        Education
      </div>
      <div className='border rounded-lg'>
        <div className='flex justify-between px-10 border rounded-lg bg-gray-100'>
          <div className='py-4 text-gray-500'>
            Add your education history, mention all the details correctly
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
          {eduData.map((edu) => (
            <div key={edu.id}>
              <div className='flex justify-between'>
                <div>
                  <div className='text-xl'>
                    {edu.name}
                  </div>
                  <div className='text-gray-500'>
                    {edu.degree}
                  </div>
                  <div className='text-gray-500'>
                    {edu.location}
                  </div>
                  <div className='text-gray-500'>
                    <div className='flex gap-2'>
                      <div>
                        {edu.year1}
                      </div>
                      <div>
                        -
                      </div>
                      <div>
                        {edu.year2}
                      </div>
                    </div>
                    
                  </div>
                  <div className='text-gray-500'>
                    {edu.remarks}
                  </div>
                </div>
                <div className='flex gap-4 my-auto'>
                  <button 
                    className='px-2 py-2 border rounded-full drop-shadow-lg'
                    onClick={() => handleEdit(edu)}
                  >
                    <Icons.Pen/>
                  </button>
                  <button className='px-2 py-2 border rounded-full drop-shadow-lg' onClick={() => handleDelete(edu.id)}>
                    <Icons.Trash/>
                  </button>
                </div>
              </div>
              <hr className='my-2' />
            </div>
          ))}
        </div>
      </div>

      {(editingEdu || isAdding) && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-6 rounded-lg md:w-1/2'>
            <div className='flex justify-between mx-10'>
              <div>
                <h2 className='text-xl font-bold mb-4'>
                  {isAdding ? 'Add Education' : 'Edit Education'}
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
                School/College
              </div>
              <div>
                <input 
                className='w-full border rounded px-2 py-1 mb-2'
                value={isAdding ? newEdu.name : editingEdu.name}
                onChange={(e) => isAdding ? handleNewInputChange('name', e.target.value) : handleInputChange('name', e.target.value)}
                placeholder="School/Institution Name"
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
                        value={isAdding ? newEdu.year1 : editingEdu.year1}
                        onChange={(e) => isAdding ? handleNewInputChange('year', e.target.value) : handleInputChange('year', e.target.value)}
                        placeholder="From Year"
                      />
                </div>
                <div>
                    <input 
                      className='w-full border rounded px-2 py-1 mb-2'
                      value={isAdding ? newEdu.year2 : editingEdu.year2}
                      onChange={(e) => isAdding ? handleNewInputChange('year', e.target.value) : handleInputChange('year', e.target.value)}
                      placeholder="To Year"
                    />
                </div>

              </div>
            </div>

            <div className='my-4'>
              <div>
                Degree (optional)
              </div>
              <div className='my-2'>
                <input 
                className='w-full border rounded px-2 py-1 mb-2'
                value={isAdding ? newEdu.degree : editingEdu.degree}
                onChange={(e) => isAdding ? handleNewInputChange('degree', e.target.value) : handleInputChange('degree', e.target.value)}
                placeholder="Degree"
              />
                 
              </div>

            </div>
            
            <div className='mt-4 mb-2'>
              Area of Study
            </div>
            <input 
              className='w-full border rounded px-2 py-1 mb-2'
              value={isAdding ? newEdu.location : editingEdu.location}
              onChange={(e) => isAdding ? handleNewInputChange('location', e.target.value) : handleInputChange('location', e.target.value)}
              placeholder="Location"
            />
            
            <div className='mt-4 mb-2'>
              Description
            </div>
            <textarea 
              className='w-full border rounded px-2 py-1 mb-4'
              value={isAdding ? newEdu.remarks : editingEdu.remarks}
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

export default EducationInfo;