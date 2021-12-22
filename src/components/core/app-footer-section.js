import PropTypes from 'prop-types'
import { Col, Container, Row } from 'react-bootstrap';
import { PaLanguageSupport } from '../../shared/constants';
import { useTranslation } from 'react-i18next';

const JobRoles = ["Software Developer", "Quality Analyst", "Software Architect", "Business Analyst"];
const CompanyDetails = ["About Us", "Poly Enterprise", "Contact", "Careers", "Reviews", "Blogs", "Affiliate", "Help & Support", "Terms Of Use", "FAQ", "Privacy"];
const Products = ["Discord Community", "Poly Community", "PaServe-Appliance Controller"];

function AppFooterSection(props) {
    let { jobRoles } = props;
    const { i18n } = useTranslation();
    jobRoles = JobRoles;
    return (
        <Container fluid className="bg-alternate-section">
            <Container fluid="sm" className="p-4 app-footer-container">
                <Row>
                    <Col md={4}>
                        <h5>Skills</h5>
                        <Row className="ms-0">
                            {
                                jobRoles.map((val, idx) => {
                                    return (
                                        <Col key={idx} md={5} className="p-0 pt-2">
                                            <a href='#'>
                                                <small>{val}</small>
                                            </a>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </Col>
                    <Col md={4}>
                        <h5>Company</h5>
                        {
                            CompanyDetails.map((val, idx) => {
                                return (
                                    <Col key={idx} md={5} className="p-0 pt-2">
                                        <a href='#'>
                                            <small>{val}</small>
                                        </a>
                                    </Col>
                                );
                            })
                        }
                    </Col>
                    <Col md={4}>
                        <h5>Products & Presence</h5>
                        {
                            Products.map((val, idx) => {
                                return (
                                    <Col key={idx} md={12} className="p-0 pt-2">
                                        <a href='#'>
                                            <small>{val}</small>
                                        </a>
                                    </Col>
                                );
                            })
                        }
                    </Col>
                </Row>
                <Row className="pt-4">
                    <Col md={12}><h5>Site Languages</h5></Col>
                    <Col md={12} className="pt-2">
                        <Row>
                            {
                                Object.keys(PaLanguageSupport).map((val, idx) => {
                                    return (
                                        <Col key={idx} md={1}>
                                            <button className={val === i18n.language ? "btn btn-link p-0 active" : "btn btn-link p-0"} onClick={() => i18n.changeLanguage(val)}>
                                                <small>{PaLanguageSupport[val].langKey}</small>
                                            </button>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={12} className='text-end'>
                        <small>
                            @Copyrights - The Polyglot Academy Pvt. Ltd.
                        </small>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

AppFooterSection.propTypes = {
    jobRoles: PropTypes.array.isRequired
}

export default AppFooterSection
