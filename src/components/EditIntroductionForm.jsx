import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { editIntroduction } from '../actions'

const FormGroup = styled.div`
  margin-bottom: 25px;
`

const EditIntroductionForm = ({ introduction, dispatchEditIntroduction, setIsEditing }) => {
  let { image, description } = introduction

  return (
    <div>
      <FormGroup className="form-group">
        Image
        <input
          onChange={e => {
            image = e.target.value
          }}
          className="form-control"
          placeholder="Enter image url"
          defaultValue={image}
        />
      </FormGroup>
      <FormGroup className="form-group">
        Description
        <input
          onChange={e => {
            description = e.target.value
          }}
          className="form-control"
          placeholder="Enter description"
          defaultValue={description}
        />
      </FormGroup>
      <button
        type="button"
        className="btn btn-success"
        data-dismiss="modal"
        onClick={e => {
          e.preventDefault()
          dispatchEditIntroduction(image, description)
          setIsEditing(false)
        }}
      >
        Save
      </button>
      <button
        type="button"
        className="btn btn-info"
        data-dismiss="modal"
        style={{ marginLeft: '10px' }}
        onClick={e => {
          e.preventDefault()
          setIsEditing(false)
        }}
      >
        Cancel
      </button>
    </div>
  )
}

EditIntroductionForm.propTypes = {
  introduction: PropTypes.exact({
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  setIsEditing: PropTypes.func.isRequired,
  dispatchEditIntroduction: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  introduction: state.introduction,
})

const mapDispatchToProps = dispatch => ({
  dispatchEditIntroduction: (image, description) => dispatch(editIntroduction(image, description)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditIntroductionForm)