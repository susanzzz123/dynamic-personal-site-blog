import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { editPost, deletePost } from '../actions'
import PostEdit from './PostEdit'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { BsTrash } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { Container, Row, Col } from 'react-bootstrap'

// formats how each post would be displayed
const PostDisplay = ({ dispatchEditPost, dispatchDeletePost, id, title, url, description }) => {
  const [edit, setEdit] = useState(false)
  const [ti, setTi] = useState(title)
  const [img, setImg] = useState(url)
  const [des, setDes] = useState(description)

  const handleSave = () => {
    setEdit(false)
    dispatchEditPost(id, ti, img, des)
  }

  const handleCancel = () => {
    setEdit(false)
    setTi(title)
    setImg(url)
    setDes(description)
  }

  return (
    <>
      <Card style={{ width: '29rem' }}>
        {
          !edit && (
            <Card.Img variant="top" src={url} />
          )
        }
        <Card.Body>
          {
            !edit && (
              <>
              <Container>
                <Row>
                  <Col>
                    <Card.Title>Post #{id}: {title}</Card.Title>
                    <Card.Text className='mb-3'>{description}</Card.Text>
                  </Col>
                  <Col sm={1}>
                    <IconContext.Provider value={{ color: 'red', size: '1.25em' }}>
                      <strong>
                        <BsTrash style={{ cursor: 'pointer' }} onClick={() => dispatchDeletePost(id)}>
                        </BsTrash>
                      </strong>
                    </IconContext.Provider>
                  </Col>
                </Row>
              </Container>
                <Button variant="warning" onClick={() => setEdit(true)} hidden={edit}>
                  Edit
                </Button>
              </>
            )
          }
          {
            edit && (
              <>
                <PostEdit title={ti} setTitle={setTi}
                url={img} setUrl={setImg} des={des} setDes={setDes} />
                <Button className='mt-2' variant="primary" onClick={() => handleSave()}>Save</Button> {' '}
                <Button className='mt-2' variant="danger" onClick={() => handleCancel()}>Cancel</Button>
              </>
            )
          }
        </Card.Body>
      </Card>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditPost: (id, title, url, description) => dispatch(editPost(id, title, url, description)),
  dispatchDeletePost: id => dispatch(deletePost(id))
})

PostDisplay.propTypes = {
  dispatchEditPost: PropTypes.func.isRequired,
  dispatchDeletePost: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default connect(null, mapDispatchToProps)(PostDisplay)
