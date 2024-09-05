import Row from "react-bootstrap/Row";

const Title = () => {
  return (
    <Row
      style={{
        backgroundColor: "#FF6666",
        color: "white",
        fontSize: 20,
        border: "1px solid black",
      }}
      className="p-2 mb-2"
    >
      React Test App
    </Row>
  );
};

export default Title;
