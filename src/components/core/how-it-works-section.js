import { Container, Row, Button, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

function HowItWorksSection(props) {
    const { t, i18n } = useTranslation();
    const { tryForFreeUrl } = props;
    const filePath = "/images/how-it-work-" + i18n.language + ".gif";
    return (
        <Container>
            <Row className="how-it-works-container">
                <Col className="container-header text-center"><h1>{t('pa_how_it_works_label')}</h1></Col>
                <Col >
                    <img
                        src={filePath}
                        alt={t('pa_how_it_works_label')}
                    />
                    <Button className="btn btn-bg-primary rounded-pill btn-lg" link={tryForFreeUrl}>
                        {t('pa_try_free_btn_label')}
                    </Button></Col>
            </Row>
        </Container>
    );
}

HowItWorksSection.propTypes = {
    tryForFreeUrl: PropTypes.string.isRequired
}

export default HowItWorksSection;
