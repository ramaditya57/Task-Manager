import React, { useRef, useState } from 'react';
import { LuUser, LuUpload, LuTrash } from 'react-icons/lu';

const ProfilePhotoSelector = ({image, setImage}) => {
    const inputRef = useRef(null);
    const [ previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Update the image state
            setImage(file);

            // Generate a preview URL from the file
            const preview = URL.createObjectURL(file);
            setPreviewUrl(preview);
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        setPreviewUrl(null);
    };

    const onChooseFile = () => {
        inputRef.current.click();
    };
  return <div className="flex justify-center mb-6">
  <input
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    ref={inputRef}
    className="hidden"
  />
  {!image ? (
    <div className="w-20 h-20 flex items-center justify-center bg-slate-800 text-slate-400 rounded-full relative cursor-pointer shadow-inner border border-slate-700">
      <LuUser className="text-3xl" />
      <button
        type="button"
        className="w-8 h-8 flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white rounded-full absolute -bottom-1 -right-1 shadow-md"
        onClick={onChooseFile}
      >
        <LuUpload />
      </button>
    </div>
  ) : (
    <div className="relative">
      <img
        src={previewUrl}
        alt="profile photo"
        className="w-20 h-20 rounded-full object-cover border border-slate-700 shadow-md"
      />
      <button
        type="button"
        className="w-8 h-8 flex items-center justify-center bg-red-600 hover:bg-red-500 text-white rounded-full absolute -bottom-1 -right-1 shadow-md"
        onClick={handleRemoveImage}
      >
        <LuTrash />
      </button>
    </div>
  )}
</div>

}

export default ProfilePhotoSelector;
