import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostDisplay from './PostDisplay'

import { Container, Row, Col } from 'react-bootstrap'

// displaying all the posts
const Post = ({ postList }) => {
  return (
    <>
      <Container className='ml-3'>
      <Row xs={1} md={2} className="g-4">
        {
          // Array.from({ length: posts.length}).map((_, idx) => {
          //   posts[idx]
          // })
          postList.map(post =>
            <Col key={post.id}>
              <PostDisplay id={post.id} title={post.title}
              url={post.url} description={post.description} key={post.id}/>
            </Col>
          )
        }
        </Row>
      </Container>
    </>
  )
}

const mapStateToProps = state => ({ postList: state.postList })

Post.propTypes = {
  postList: PropTypes.array.isRequired
}

export default connect(mapStateToProps, null)(Post)
