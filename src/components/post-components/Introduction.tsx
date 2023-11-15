import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIntroduction, updateIntroduction } from '../../features/introductionSlice';

export default function Introduction() {
  const dispatch = useDispatch();
  const { image, description } = useSelector(selectIntroduction);
  const [newImage, setNewImage] = useState(image);
  const [newDescription, setNewDescription] = useState(description);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    setNewImage(image);
    setNewDescription(description);
  }, [image, description]);

  const handleUpdateIntroduction = () => {
    dispatch(updateIntroduction({ image: newImage, description: newDescription }));
    setIsEditMode(false);
  };

  const handleCancelEdit = () => {
    setNewImage(image);
    setNewDescription(description);
    setIsEditMode(false);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <h1 className="text-6xl text-center font-bold mb-2">Hello! Welcome to my dynamic page!</h1>
      {isEditMode ? (
        <>
          <div className="mb-4">
            <label htmlFor="introimageurl" className="block mb-1">
                Image URL 
                <input
                type="text"
                id="introimageurl"
                value={newImage}
                onChange={(e) => setNewImage(e.target.value)}
                className="border rounded px-2 py-1 w-full"
                />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="introdesc" className="block mb-1">
                Description
            <textarea
              value={newDescription}
              id="introdesc"
              onChange={(e) => setNewDescription(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
            </label>
          </div>
          <button
            onClick={handleUpdateIntroduction}
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
          >
            Save
          </button>
          <button
            onClick={handleCancelEdit}
            type="button"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <img src={newImage} alt="" className="mx-auto mb-4" />
          <p className="text-center mb-4">{newDescription}</p>
          <button
            onClick={() => setIsEditMode(true)}
            type="button"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};