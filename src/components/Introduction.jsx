import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0 100px;
`

const Introduction = ({ introduction }) => (
  <Wrapper>
    <div className="row">
      <div className="col-8">
        {
          introduction.image ? <img alt="" className="img-fluid" src={introduction.image} style={{ height: '400px' }} /> : ''
        }
      </div>
      <div className="col-4">
        <h3>{ introduction.description }</h3>
      </div>
    </div>
  </Wrapper>
)

Introduction.propTypes = {
  introduction: PropTypes.exact({
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
}

const mapStateToProps = state => ({
  introduction: state.introduction,
})

export default connect(mapStateToProps, null)(Introduction)
