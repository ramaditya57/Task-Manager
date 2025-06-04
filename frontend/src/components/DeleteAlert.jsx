import React from 'react';

const DeleteAlert = ({ content, onDelete }) => {
  return (
    <div>
      <p className="text-sm text-slate-200">{content}</p>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="flex items-center justify-center gap-1.5 text-xs md:text-sm font-medium text-rose-400 hover:text-rose-300 whitespace-nowrap bg-rose-900/20 border border-rose-700 rounded-lg px-4 py-2 transition-colors"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAlert;
