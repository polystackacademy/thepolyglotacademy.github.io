import { Col, Row, Container } from "react-bootstrap";

function NotFoundWidget() {
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

export default NotFoundWidget
