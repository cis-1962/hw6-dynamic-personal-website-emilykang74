let postsCount = 0

export const addPost = (title, image, description) => {
  postsCount += 1

  return {
    type: 'ADD_POST',
    title,
    image,
    description,
    id: postsCount,
  }
}

export const editPost = (title, image, description, id) => ({
  type: 'EDIT_POST',
  title,
  image,
  description,
  id,
})

export const deletePost = id => ({
  type: 'DELETE_POST',
  id,
})

export const editIntroduction = (image, description) => ({
  type: 'EDIT_INTRODUCTION',
  image,
  description,
})
