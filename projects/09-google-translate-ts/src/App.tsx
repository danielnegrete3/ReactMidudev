
import { Col, Container, Row, Stack } from 'react-bootstrap'
import './App.css'
import { TextArea } from './components/TextArea'

function App() {

  return (
    <Container fluid>
      <h2>Google Translate</h2>
      <Row>
          <Col>
            <Stack gap={6}>
              <TextArea 
                
              />
            </Stack>
          </Col>
      </Row>
    </Container>
  )
}

export default App
