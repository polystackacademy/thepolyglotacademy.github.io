import { Container, Row, Button, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function HowItWorksSectionWidget(props: any) {
    const { t, i18n } = useTranslation();
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
                    <Button className="btn btn-bg-primary rounded-pill btn-lg">
                        {t('pa_try_free_btn_label')}
                    </Button></Col>
            </Row>
        </Container>
    );
}

HowItWorksSectionWidget.propTypes = {
}

export default HowItWorksSectionWidget;
