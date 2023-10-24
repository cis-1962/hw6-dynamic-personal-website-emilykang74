import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { editPost, deletePost } from '../actions'
import PostForm from './PostForm'

const EditPostCard = ({
  title, description, image, id, setIsEditing, dispatchEditPost, dispatchDeletePost,
}) => {
  const formValues = {
    title,
    image,
    description,
  }
  return (
    <div className="card-body">
      <PostForm
        formValues={formValues}
        onValueChange={(valueName, value) => {
          formValues[valueName] = value
        }}
      />
      <button
        type="button"
        className="btn btn-success"
        data-dismiss="modal"
        onClick={e => {
          e.preventDefault()
          dispatchEditPost(formValues, id)
          setIsEditing(false)
        }}
      >
        Save
      </button>
      <button
        type="button"
        className="btn btn-info"
        data-dismiss="modal"
        style={{ marginLeft: '1rem' }}
        onClick={e => {
          e.preventDefault()
          setIsEditing(false)
        }}
      >
        Cancel
      </button>
      <div>
        <button
          type="button"
          className="btn btn-danger"
          style={{ marginTop: '1rem', width: '100%' }}
          onClick={e => {
            e.preventDefault()
            dispatchDeletePost(id)
          }}
        >
          {' '}
          DELETE POST
        </button>
      </div>
    </div>
  )
}

EditPostCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  setIsEditing: PropTypes.func.isRequired,
  dispatchEditPost: PropTypes.func.isRequired,
  dispatchDeletePost: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  dispatchEditPost:
    ({ title, image, description }, id) => dispatch(editPost(title, image, description, id)),
  dispatchDeletePost: id => dispatch(deletePost(id)),
})

export default connect(null, mapDispatchToProps)(EditPostCard)
