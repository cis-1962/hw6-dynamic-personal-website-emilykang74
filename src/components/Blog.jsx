import React from 'react'
import styled from 'styled-components'
import PostsList from './PostsList'
import AddPostModal from './AddPostModal'

const Wrapper = styled.div`
  padding: 50px 120px;
`

const Title = styled.h1`
  color: turquoise;
  margin-bottom: 30px;
`

const Blog = () => (
  <Wrapper>
    <Title>
      Blog Posts
      <button
        type="button"
        className="btn btn-primary float-right"
        data-toggle="modal"
        data-target="#addPostModal"
      >
        Add Post
      </button>
    </Title>
    <PostsList />
    <AddPostModal />
  </Wrapper>
)
export default Blog
