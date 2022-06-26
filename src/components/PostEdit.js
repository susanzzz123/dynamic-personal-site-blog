import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'

// input form for changing the information on the post
const PostEdit = ({ title, setTitle, url, setUrl, des, setDes }) => {
  return (
      <>
        <Form>
          <Form.Group>
            <Form.Label className='mt-1'>Title</Form.Label>
            <Form.Control placeholder="Title: " onChange={e => setTitle(e.target.value)} value={title}/>
          </Form.Group>
          <Form.Group>
            <Form.Label className='mt-2'>Image URL</Form.Label>
            <Form.Control placeholder="Image URL: " onChange={e => setUrl(e.target.value)}value={url}/>
          </Form.Group>
          <Form.Group>
            <Form.Label className='mt-2'>Description</Form.Label>
            <Form.Control as='textarea' placeholder="Write a description: " onChange={e => setDes(e.target.value)} value={des}/>
          </Form.Group>
        </Form>
      </>
  )
}

PostEdit.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  setUrl: PropTypes.func.isRequired,
  des: PropTypes.string.isRequired,
  setDes: PropTypes.func.isRequired
}

export default PostEdit
