import { Col, Row, Container } from "react-bootstrap";

function Widget404() {
    const filePath = "/images/404.svg";
    return (
        <Container>
            <Row>
                <Col>
                    <img src={filePath} />
                </Col>
            </Row>
        </Container>
    );
}

export default Widget404
