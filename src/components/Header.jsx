import React, { useState } from 'react'
import styled from 'styled-components'
import Introduction from './Introduction'
import EditIntroductionForm from './EditIntroductionForm'

const Wrapper = styled.div`
  padding: 50px 120px;
  background: rgb(222, 222, 222);
`

const Title = styled.h1`
  margin-bottom: 60px;
`

const Header = () => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <Wrapper>
      <Title>
        Hey this is me!
        { isEditing ? '' : (
          <button
            type="button"
            className="btn btn-warning float-right"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        ) }
      </Title>
      { isEditing ? <EditIntroductionForm setIsEditing={setIsEditing} /> : <Introduction /> }
    </Wrapper>
  )
}
export default Header
