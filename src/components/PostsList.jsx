import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Post from './Post'

const PostsList = ({ posts }) => (
  <div className="row">
    { posts.map(post => (
      <div key={post.id} className="col-4">
        <Post title={post.title} image={post.image} description={post.description} id={post.id} />
      </div>
    )) }
  </div>
)

PostsList.propTypes = {
  posts: PropTypes.instanceOf(Array).isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts,
})

export default connect(mapStateToProps, null)(PostsList)
