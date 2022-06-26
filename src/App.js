import React from 'react'
import Intro from './components/Intro'
import IntroTitle from './components/IntroTitle'
import PostTitle from './components/PostTitle'
import Post from './components/Post'
import NewPost from './components/NewPost'
import { Container, Row, Col } from 'react-bootstrap'

const App = () => {
  return (
      <>
        <div className='mb-5 bg-light'>
          <Container>
            <Row>
              <IntroTitle />
            </Row>
            <Row>
              <Col sm={1}></Col>
              <Col sm={11}>
                <Intro />
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <Row>
              <PostTitle />
            </Row>
          </Container>
          <NewPost />
          <Post />
        </div>
      </>
  )
}

export default App
