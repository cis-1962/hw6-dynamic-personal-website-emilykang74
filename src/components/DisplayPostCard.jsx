import React from 'react'
import PropTypes from 'prop-types'

const DisplayPostCard = ({
  title, description, image, id, setIsEditing,
}) => (
  <div>
    <img className="card-img-top" src={image} alt={title} />
    <div className="card-body">
      <h5 className="card-title">
        {' '}
        Post #
        { id }
        :
        { title }
      </h5>
      <p className="card-text">{ description }</p>
      <button type="button" className="btn btn-warning" onClick={() => setIsEditing(true)}>Edit Post</button>
    </div>
  </div>
)

DisplayPostCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  setIsEditing: PropTypes.func.isRequired,
}

export default DisplayPostCard
