import { useState } from 'react';
import PropTypes from 'prop-types'
import { Col, Container, Row, Carousel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function TestimonySection(props) {
    const { testimonies } = props;
    const { t } = useTranslation();
    console.log(testimonies);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Container fluid className="bg-alternate-section">
            <Container fluid="sm" className="p-4">
                <Row>
                    <Col className="text-center"><h1>{t("pa_our_members_love_label")}</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel activeIndex={index} onSelect={handleSelect} controls="false">
                            {
                                testimonies.map((v, idx) => {
                                    return (
                                        <Carousel.Item key={idx}>
                                            <div className="row g-0 bg-light position-relative">
                                                <div className="col-md-4 offset-1 mb-md-0 p-md-4">
                                                    <video controls width="100%" autoPlay={true}>
                                                        <source src={v.mediaUrl} type="video/mp4" />
                                                        <source src={v.mediaUrl} type="video/ogg" />
                                                        {t("pa_browser_support_error_message")}
                                                    </video>
                                                </div>
                                                <div className="col-md-6 p-4 ps-md-0">
                                                    <q>{v.feedbackMessage}</q>
                                                    <h5 className="mt-0">{v.memberOrganization}</h5>
                                                    <h5 className="mt-0">{v.memberRole}</h5>
                                                    <a href={v.articleUrl} className="stretched-link">{t("pa_read_more_label")}</a>
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                    );
                                })
                            }
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

TestimonySection.propTypes = {
    testimonies: PropTypes.array.isRequired
}

export default TestimonySection;
