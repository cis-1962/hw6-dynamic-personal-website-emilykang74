import React, { useState } from 'react'
import PropTypes from 'prop-types'

import DisplayPostCard from './DisplayPostCard'
import EditPostCard from './EditPostCard'

const Post = ({
  title, image, description, id,
}) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="card">
      { isEditing ? (
        <EditPostCard
          title={title}
          image={image}
          description={description}
          id={id}
          setIsEditing={setIsEditing}
        />
      )
        : (
          <DisplayPostCard
            title={title}
            image={image}
            description={description}
            id={id}
            setIsEditing={setIsEditing}
          />
        ) }
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default Post
