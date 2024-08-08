import React, { useState } from 'react';
import { Icons } from '../assets/Icons/Icons';

const SkillInfo = () => {


  


  const [skillData, setSkillData] = useState([
    { id: 1, name: "Content Writing" },
    { id: 2, name: "Digital Marketing" },
    { id: 3, name: "Graphic Designing" },
    { id: 4, name: "Video Editing" },
    { id: 5, name: "Photography" },
    { id: 6, name: "Web Development" },
    { id: 7, name: "UI/UX Design" },
    { id: 8, name: "Data Analysis" },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [newSkill, setNewSkill] = useState({ name: "" });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setSkillData(skillData.filter(skill => skill.id !== id));
  };

  const handleInputChange = (value) => {
    setNewSkill({ name: value });
  };

  const handleSave = () => {
    if (newSkill.name.trim()) {
      const newId = Math.max(...skillData.map(skill => skill.id), 0) + 1;
      setSkillData([...skillData, { ...newSkill, id: newId }]);
      setNewSkill({ name: "" });
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewSkill({ name: "" });
  };

  return (
    <div className='mx-4 sm:mx-6 md:mx-10 relative'>
      <div className='text-xl sm:text-2xl font-bold mb-4'>
        Skills
      </div>
      <div className='border rounded-lg'>
        <div className='flex flex-col sm:flex-row justify-between px-4 sm:px-6 md:px-10 py-4 border rounded-lg bg-gray-100'>
          <div className='text-sm sm:text-base text-gray-500 mb-2 sm:mb-0'>
            Add your skills, mention all the details correctly
          </div>
          <div className='self-start sm:self-center'>
            <button 
              className='bg-red-500 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base' 
              onClick={handleEdit}
            >
              <div className='flex items-center gap-1 sm:gap-2'>
                <div className='text-white'>
                  Update
                </div>
                <div>
                  <Icons.Add/>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className='px-4 sm:px-6 md:px-10 py-4'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {skillData.map((skill) => (
              <div key={skill.id} className='mb-2 last:mb-0 border rounded-full px-3 py-1 flex justify-between items-center'>
                <div className='text-sm sm:text-base'>
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isEditing && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
          <div className='bg-white p-4 sm:p-6 rounded-lg w-3/4'>
          <div className='my-4 flex justify-between'>
            <div>
                <h2 className='text-lg sm:text-xl font-bold mb-4'>
                Skills
                </h2>
            </div>
            <div>
            <div className='flex justify-end gap-2'>
              <button 
                className='px-3 py-1 sm:px-4 sm:py-2 text-red-500 border border-red-500 rounded-full text-sm sm:text-base'
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button 
                className='px-3 py-1 sm:px-4 sm:py-2 bg-red-500 text-white rounded-full md:px-6 text-sm sm:text-base'
                onClick={handleSave}
              >
                Update
              </button>
            </div>

          </div>
            
            
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-4'>
              {skillData.map((skill) => (
                <div key={skill.id} className='mb-2 last:mb-0 border rounded-full px-3 py-1 flex justify-between items-center'>
                  <div className='text-sm sm:text-base'>
                    {skill.name}
                  </div>
                  <button 
                    className='text-red-500'
                    onClick={() => handleDelete(skill.id)}
                  >
                    <Icons.Trash/>
                  </button>
                </div>
              ))}
            </div>
            <h2 className='text-lg sm:text-xl font-bold mb-4'>
              Add Skill
            </h2>
            <select onChange={(e) => handleInputChange(e.target.value)}
                    className='w-full border rounded px-2 py-1 mb-4 text-sm sm:text-base'>
              {skillData.map((skill) => (
                <option key={skill.id} value={skill.name}>
                  {skill.name}
                </option>
              ))}
            </select>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillInfo;