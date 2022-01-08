import { Tab, Row, Col, Nav, Container, NavDropdown } from 'react-bootstrap';

export default function CoursesNavbar() {
    return (
        <Container className="app-courses-dropdown">
            <div className="d-flex justify-content-between">
                <h6>Browse Courses</h6>
                <a>View All Courses</a>
            </div>
            <NavDropdown.Divider />
            <Tab.Container id="courses" defaultActiveKey="first">
                <Row>
                    <Col sm={4}>
                        <Nav variant="tabs" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                asvbdghbvasd
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                nsaudbusayd
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}