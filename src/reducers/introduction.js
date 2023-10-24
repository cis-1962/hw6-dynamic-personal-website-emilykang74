const introduction = (state = { image: '', description: '' }, action) => {
    const { type, image, description } = action
    return type === 'EDIT_INTRODUCTION' ? { image, description } : state
  }
  
  export default introduction
  