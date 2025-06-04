import React, { useState } from 'react';
import { HiMiniPlus, HiOutlineTrash } from 'react-icons/hi2';

const TodoListInput = ({ todoChecklist, setTodoChecklist }) => {
  const [option, setOption] = useState('');

  const handleAddOption = () => {
    if (option.trim()) {
      setTodoChecklist([...todoChecklist, option.trim()]);
      setOption('');
    }
  };

  const handleDeleteOption = (index) => {
    const updatedArr = todoChecklist.filter((_, idx) => idx !== index);
    setTodoChecklist(updatedArr);
  };

  return (
    <div>
      {todoChecklist.map((item, index) => (
        <div
          key={item}
          className='flex justify-between bg-slate-800 border border-slate-700 px-3 py-2 rounded-md mb-3 mt-2'
        >
          <p className='text-xs text-slate-100'>
            <span className='text-xs text-slate-400 font-semibold mr-2'>
              {index < 9 ? `0${index + 1}.` : `${index + 1}`}
            </span>
            {item}
          </p>

          <button className='cursor-pointer' onClick={() => handleDeleteOption(index)}>
            <HiOutlineTrash className='text-lg text-red-400 hover:text-red-500' />
          </button>
        </div>
      ))}

      <div className='flex items-center gap-5 mt-4'>
        <input
          type='text'
          placeholder='Enter task'
          value={option}
          onChange={({ target }) => setOption(target.value)}
          className='w-full text-[13px] text-white placeholder:text-slate-400 outline-none bg-slate-900 border border-slate-700 px-3 py-2 rounded-md'
        />
        <button className='card-btn text-nowrap' onClick={handleAddOption}>
          <HiMiniPlus className='text-lg' />Add
        </button>
      </div>
    </div>
  );
};

export default TodoListInput;
