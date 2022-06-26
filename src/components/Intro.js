import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addUrl, addDes } from '../actions'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import { Row, Col, Container } from 'react-bootstrap'

let prevUrl = ''
let prevDes = ''

// the intro area where users can add and edit the image and description shown
const Intro = ({ url, description, dispatchAddUrl, dispatchAddDes }) => {
  const [edit, setEdit] = useState(false)

  const handleSave = () => {
    setEdit(false)
    prevUrl = url
    prevDes = description
  }

  const handleCancel = () => {
    setEdit(false)
    dispatchAddUrl(prevUrl)
    dispatchAddDes(prevDes)
  }

  return (
    <>
      <Container className='mt-4'>
        <Row>
          <Col>
            {
              url !== '' && (
                <Image fluid={true} alt='profile-pic' src={url}/>
              )
            }
          </Col>
          <Col>
            {
              description !== '' && (
                <h3 style={{ color: 'rgb(35, 131, 255' }}>{description}</h3>
              )
            }
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col sm={1}>
            <Button className='mb-3' variant="warning" onClick={() => setEdit(true)} hidden={edit}>
              Edit
            </Button>
          </Col>
        </Row>
      </Container>
      {
        edit && (
          <Form style={{ width: '70em' }}>
            <Form.Group>
              <Form.Label className='mt-2'>Image URL</Form.Label>
              <Form.Control placeholder="Image URL: " value={url}
              onChange={e => dispatchAddUrl(e.target.value)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label className='mt-2'>Description</Form.Label>
              <Form.Control as='textarea' placeholder="Write a description: "
              value={description} onChange={e => dispatchAddDes(e.target.value)}/>
            </Form.Group>
            <div className='mt-2 mb-3'>
              <Button variant='primary' onClick={() => handleSave()}>Save</Button> {'  '}
              <Button variant='danger' onClick={() => handleCancel()}>Cancel</Button>
            </div>
          </Form>
        )
      }
    </>
  )
}

const mapStateToProps = state => ({ url: state.url, description: state.description })

const mapDispatchToProps = dispatch => ({
  dispatchAddUrl: url => dispatch(addUrl(url)),
  dispatchAddDes: description => dispatch(addDes(description))
})

Intro.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dispatchAddUrl: PropTypes.func.isRequired,
  dispatchAddDes: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro)
