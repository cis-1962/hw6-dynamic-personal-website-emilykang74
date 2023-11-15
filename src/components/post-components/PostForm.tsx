import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addPost } from '../../features/postsSlice';


export default function PostForm() {
  const dispatch = useDispatch();
  const id: string = uuidv4();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddPost = () => {
    if (title && description && image) {
      dispatch(addPost({ id, title, description, image }));
      setTitle('');
      setDescription('');
      setImage('');
      setIsFormVisible(false); 
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        type="button"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2"
      >
        {isFormVisible ? 'Cancel' : 'Add Post'}
      </button>
      {isFormVisible && (
        <>
          <div className="mb-4">
            <label htmlFor="postformtitle" className="block mb-1">
                Title
                <input
                type="text"
                id="postformtitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border rounded px-2 py-1 w-full"
                />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="postformdesc" className="block mb-1">
                Description
                <textarea
                value={description}
                id="postformdesc"
                onChange={(e) => setDescription(e.target.value)}
                className="border rounded px-2 py-1 w-full"
                />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="postformimgurl" className="block mb-1">
                Image URL
                <input
                type="text"
                value={image}
                id="postformimgurl"
                onChange={(e) => setImage(e.target.value)}
                className="border rounded px-2 py-1 w-full"
                />
            </label>
          </div>
          <button
            onClick={handleAddPost}
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Post
          </button>
        </>
      )}
    </div>
  );
};
