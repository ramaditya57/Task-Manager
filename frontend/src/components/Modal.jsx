import React from 'react';

const Modal = ({ children, isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-black/40">
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* Modal Content */}
        <div className="relative bg-slate-900 rounded-lg shadow-md border border-slate-700">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b border-slate-700 rounded-t">
            <h3 className="text-lg font-medium text-white">
              {title}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center transition"
            >
              <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-4 md:p-5 space-y-4 text-slate-100">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
