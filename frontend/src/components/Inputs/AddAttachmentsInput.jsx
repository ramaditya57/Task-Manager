import React, { useState } from 'react';
import { HiMiniPlus, HiOutlineTrash } from 'react-icons/hi2';
import { LuPaperclip } from 'react-icons/lu';

const AddAttachmentsInput = ({ attachments, setAttachments }) => {
  const [option, setOption] = useState('');

  const handleAddOption = () => {
    if (option.trim()) {
      setAttachments([...attachments, option.trim()]);
      setOption('');
    }
  };

  const handleDeleteOption = (index) => {
    const updatedArr = attachments.filter((_, idx) => idx !== index);
    setAttachments(updatedArr);
  };

  return (
    <div>
      {attachments.map((item, index) => (
        <div
          key={item}
          className='flex justify-between items-center bg-slate-800 border border-slate-700 px-3 py-2 rounded-md mb-3 mt-2'
        >
          <div className='flex-1 flex items-center gap-3'>
            <LuPaperclip className='text-slate-400' />
            <p className='text-xs text-slate-100 break-all'>{item}</p>
          </div>

          <button className='cursor-pointer' onClick={() => handleDeleteOption(index)}>
            <HiOutlineTrash className='text-lg text-red-400 hover:text-red-500' />
          </button>
        </div>
      ))}

      <div className='flex items-center gap-5 mt-4'>
        <div className='flex-1 flex items-center gap-3 bg-slate-900 border border-slate-700 rounded-md px-3 py-2'>
          <LuPaperclip className='text-slate-400' />

          <input
            type='text'
            className='w-full text-[13px] text-white placeholder:text-slate-400 outline-none bg-transparent'
            placeholder='Add File Link'
            value={option}
            onChange={({ target }) => setOption(target.value)}
          />
        </div>

        <button className='card-btn text-nowrap' onClick={handleAddOption}>
          <HiMiniPlus className='text-lg' />Add
        </button>
      </div>
    </div>
  );
};

export default AddAttachmentsInput;
