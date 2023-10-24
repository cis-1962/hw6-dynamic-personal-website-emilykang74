const posts = (state = [], action) => {
    const {
      type, title, image, description, id,
    } = action
    const newPost = {
      title, image, description, id,
    }
  
    switch (type) {
      case 'ADD_POST':
        return [
          ...state,
          newPost,
        ]
      case 'EDIT_POST':
        return state.map(post => (post.id === id ? newPost : post))
      case 'DELETE_POST':
        return state.filter(post => post.id !== id)
      default:
        return state
    }
  }
  
  export default posts
  