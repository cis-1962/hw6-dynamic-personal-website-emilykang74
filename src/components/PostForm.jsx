import React from 'react'
import PropTypes from 'prop-types'

const PostForm = ({ formValues, onValueChange }) => {
  const formInputs = {
    title: {
      label: 'Title',
      placeholder: 'Enter the title of the post',
    },
    image: {
      label: 'Image',
      placeholder: 'Enter image url',
    },
    description: {
      label: 'Description',
      placeholder: 'Enter description',
    },
  }
  return (
    <div>
      { Object.keys(formInputs).map(index => (
        <div key={index} className="form-group">
          {formInputs[index].label}
          <input
            onChange={e => onValueChange(index, e.target.value)}
            className="form-control"
            placeholder={formInputs[index].placeholder}
            defaultValue={formValues[index]}
          />
        </div>
      )) }
    </div>
  )
}

PostForm.propTypes = {
  formValues: PropTypes.instanceOf(Object).isRequired,
  onValueChange: PropTypes.func.isRequired,
}

export default PostForm
