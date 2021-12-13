import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Button } from 'react-bootstrap';

function AnyOneCanCodeSection(props) {
    const { t, i18n } = useTranslation();
    const { redirectUrl } = props;
    const filePath = "/images/any-one-code-" + i18n.language + ".png";
    return (
        <Container>
            <Row className="how-it-works-container">
                <Col >
                    <img
                        src={filePath}
                        alt={t('pa_how_it_works_label')}
                    />
                    <Button className="btn btn-bg-primary rounded-pill btn-lg" link={redirectUrl}>
                        Start Your Journey
                    </Button></Col>
            </Row>
        </Container>
    )
}

AnyOneCanCodeSection.propTypes = {
    redirectUrl: PropTypes.string.isRequired
}

export default AnyOneCanCodeSection
