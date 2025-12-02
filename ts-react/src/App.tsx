import { Col, Container, Row } from "react-bootstrap";
import ClassComponent from "./ClassComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <h1 className="text-center">TS+REACT</h1>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <ClassComponent name="giorgio" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
