import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Button } from 'react-bootstrap';

function SubscriptionSection(props) {
    const { membershipPlan } = props;
    const backgroundWatermarkPath = './images/subc-back-watermark.png';
    const pwLogo = './images/logo_pw.png';
    console.log(membershipPlan);
    return (
        <Container fluid="sm">
            <Row>
                <Col md={12}>
                    <div className="web-subscription-section mt-3" style={{ backgroundImage: 'url(' + backgroundWatermarkPath + ')' }}>
                        <Row>
                            <Col md={3}>
                                <img src={pwLogo} />
                            </Col>
                            <Col md={9}>
                                <h1>Every new skill &apos;ll Bring you new opportunities</h1>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col md={{ span: 5, offset: 1 }} >
                                <h5>Access to all 100+ courses including:</h5>
                                <ul>
                                    <li>Live educator chat support</li>
                                    <li>20+ hours of learning per course</li>
                                    <li>Exams & continuous assessments</li>
                                    <li>Unique lessons curated by in-house experts</li>
                                    <li>Lifetime access to all lessons</li>
                                    <li>Globally accredited certifications</li>
                                </ul>
                            </Col>
                            <Col md={{ span: 5 }} className="text-center" >
                                <h2>$34.99 /month</h2>
                                <h4>FREE for 4 weeks</h4>
                                <Button className="btn btn-primary btn-lg rounded-pill mt-5">
                                    Start your free course
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

SubscriptionSection.propTypes = {
    membershipPlan: PropTypes.object.isRequired
}

export default SubscriptionSection
