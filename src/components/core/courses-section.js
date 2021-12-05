import { Col, Container, Row, Card } from "react-bootstrap";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faGraduationCap, faUser, faClock, faBookReader } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import Button from "@restart/ui/esm/Button";

function CoursesSection(props) {
    const { courses } = props;
    console.log(courses);
    return (
        <Container fluid className="bg-alternate-section">
            <Container fluid="sm" className="p-4">
                <Row>
                    <Col className="text-center"><h1>Popular Courses</h1></Col>
                </Row>
                <Row>
                    <Container fluid>
                        <Row>
                            {
                                courses.map((v, i) => {
                                    return (
                                        <Col key={i} xs={12} md={4} sm={2}>
                                            <div className="p-md-5">
                                                <Card>
                                                    <div className="course-image">
                                                        <Card.Img variant="left" src={v.imageUrl} />
                                                        {
                                                            v.reviewAvg >= 4 ?
                                                                <div className="course-watermarks most-rated-title">
                                                                    <FontAwesomeIcon icon={faStar} />
                                                                    <span className="most-viewed" title="Most Viewed Category">Top Rated</span>
                                                                </div> : null
                                                        }
                                                        <div className="course-watermarks ref-links">
                                                            <Button onClick={() => console.log("Watch Courses clicked")} title="Watch Courses">
                                                                <FontAwesomeIcon icon={faGraduationCap} />
                                                            </Button>
                                                            <Button onClick={() => console.log("Watch Intro clicked")} title="Watch Intro">
                                                                <FontAwesomeIcon icon={faYoutube} />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <Card.Body>
                                                        <Card.Title className="text-truncate">{v.title}</Card.Title>
                                                        <Row className="course-stats">
                                                            {
                                                                v.numberOfStudents > 0 ?
                                                                    <Col md={6}>
                                                                        <FontAwesomeIcon icon={faUser} /> &nbsp;
                                                                        {v.numberOfStudents}&nbsp;Graduates
                                                                    </Col>
                                                                    : null
                                                            }
                                                            {
                                                                v.courseDuration > 0 && v.courseDurationType ?
                                                                    <Col md={6}>
                                                                        <FontAwesomeIcon icon={faClock} /> &nbsp;
                                                                        {v.courseDuration}&nbsp;{v.courseDurationType}
                                                                    </Col>
                                                                    : null
                                                            }
                                                            {
                                                                v.numberOfCourses > 0 ?
                                                                    <Col md={6}>
                                                                        <FontAwesomeIcon icon={faBookReader} /> &nbsp;
                                                                        {v.numberOfCourses}&nbsp;Course{v.numberOfCourses > 1 ? 's' : ''}
                                                                    </Col>
                                                                    : null
                                                            }
                                                            {
                                                                v.reviewAvg > 0 ?
                                                                    <Col md={6} onClick={() => console.log("Open Course Page")}>
                                                                        <FontAwesomeIcon icon={faStar} /> &nbsp;
                                                                        {v.reviewAvg}
                                                                    </Col>
                                                                    : null
                                                            }
                                                        </Row>
                                                        <div className="text-end">
                                                            <Button className="btn btn-sm btn-outline-success">
                                                                Enroll Now
                                                            </Button>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </Container>
                </Row>
            </Container>
        </Container>
    )
}

CoursesSection.propTypes = {
    courses: PropTypes.array.isRequired,
}

export default CoursesSection;
