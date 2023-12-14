import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
        </Row>
        <Row>
          <Col sm={8}>sm=8</Col>
          <Col sm={4}>sm=4</Col>
        </Row>
      </Container>
      <Container fluid="md">
      <Row>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
      <Stack gap={3}>
        <div className="p-2">First item</div>
        <div className="p-2">Second item</div>
        <div className="p-2">Third item</div>
      </Stack>
      <Stack direction="horizontal" gap={3}>
        <div className="p-2">First item</div>
        <div className="p-2">Second item</div>
        <div className="p-2">Third item</div>
      </Stack>
      <Stack direction="horizontal" gap={3}>
        <div className="p-2">First item</div>
        <div className="p-2 ms-auto">Second item</div>
        <div className="p-2">Third item</div>
      </Stack>
    </Container>
    </>
  )
}

export default App
