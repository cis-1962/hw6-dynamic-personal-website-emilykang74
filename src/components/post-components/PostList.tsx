import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, deletePost, updatePost } from '../../features/postsSlice';

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const [editPostId, setEditPostId] = useState(true);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedImage, setEditedImage] = useState('');

  const handleDeletePost = (postId: string) => {
    dispatch(deletePost(postId));
  };

  const handleEditPost = (postId: boolean, title: string, description: string, image: string) => {
    setEditPostId(postId);
    setEditedTitle(title);
    setEditedDescription(description);
    setEditedImage(image);
  };

  const handleSavePostEdit = (postId: string) => {
    dispatch(updatePost({ id: postId, title: editedTitle, description: editedDescription, image: editedImage }));
    setEditPostId(false);
  };

  const isEditing = (postId) => editPostId === postId;

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-3xl font-bold mb-2">Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-4">
            {isEditing(post.id) ? (
              <>
                <div className="mb-2">
                  <label htmlFor="postlisttitle" className="block mb-1">
                    Title
                    <input
                      type="text"
                      id="postlisttitle"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                      className="border rounded px-2 py-1 w-full"
                    />
                  </label>
                </div>
                <div className="mb-2">
                  <label htmlFor="postlistdesc" className="block mb-1">
                    Description
                    <textarea
                      value={editedDescription}
                      id="postlistdesc"
                      onChange={(e) => setEditedDescription(e.target.value)}
                      className="border rounded px-2 py-1 w-full"
                    />
                  </label>
                </div>
                <div className="mb-2">
                  <label htmlFor="postlistimgurl" className="block mb-1">
                    Image URL
                    <input
                      type="text"
                      id="postlistimgurl"
                      value={editedImage}
                      onChange={(e) => setEditedImage(e.target.value)}
                      className="border rounded px-2 py-1 w-full"
                    />
                  </label>
                </div>
                <button
                  onClick={() => handleSavePostEdit(post.id)}
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditPostId(false)}
                  type="button"
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-1">{post.title}</h3>
                <p className="mb-2">{post.description}</p>
                <img src={post.image} alt="" className="mb-2" />
                <button
                  onClick={() => handleDeletePost(post.id)}
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEditPost(post.id, post.title, post.description, post.image)}
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
