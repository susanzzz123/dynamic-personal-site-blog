import React, { useState } from 'react'
import PropTypes from 'prop-types'
import PostEdit from './PostEdit'
import { connect } from 'react-redux'
import { addPost } from '../actions'
import { Container, Row, Col } from 'react-bootstrap'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

// allows users to make a new post upon click, user can also cancel posting
const NewPost = ({ dispatchAddPost }) => {
  const [clicked, setClicked] = useState(false)
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [des, setDes] = useState('')

  const handlePost = () => {
    setClicked(false)
    dispatchAddPost(title, url, des)
    setTitle('')
    setUrl('')
    setDes('')
  }

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col sm={1}>
            <Button variant='warning' onClick={() => setClicked(true)} hidden={clicked}>
              Add
            </Button>
          </Col>
        </Row>
      </Container>
      {
        clicked && (
          <Modal show={clicked} onHide={() => setClicked(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>New Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <PostEdit title={title} setTitle={setTitle}
              url={url} setUrl={setUrl} des={des} setDes={setDes} />
            </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={() => handlePost()}>Post</Button> {' '}
                <Button variant="danger" onClick={() => setClicked(false)}>Cancel</Button>
              </Modal.Footer>
          </Modal>
        )
      }
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (title, url, description) => dispatch(addPost(title, url, description))
})

NewPost.propTypes = {
  dispatchAddPost: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(NewPost)
