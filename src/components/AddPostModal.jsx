import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addPost } from '../actions'
import PostForm from './PostForm'

const AddPostModal = ({ dispatchAddPost }) => {
  const formValues = {
    title: '',
    image: '',
    description: '',
  }
  return (
    <div
      className="modal fade"
      id="addPostModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="addPostModalTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addPostModalTitle">New Post</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <PostForm
              formValues={formValues}
              onValueChange={(valueName, value) => {
                formValues[valueName] = value
              }}
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={e => {
                e.preventDefault()
                dispatchAddPost(formValues)
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

AddPostModal.propTypes = {
  dispatchAddPost: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: ({ title, image, description }) => dispatch(addPost(title, image, description)),
})

export default connect(null, mapDispatchToProps)(AddPostModal)
