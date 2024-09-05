import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Layout = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs md={10} lg={9} className="mt-5">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
