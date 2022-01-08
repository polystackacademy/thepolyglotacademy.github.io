import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Button } from 'react-bootstrap';

function AnyoneCanCodeSectionWidget(props: any) {
    const { t, i18n } = useTranslation();
    const filePath = "/images/any-one-code-" + i18n.language + ".png";
    return (
        <Container>
            <Row className="how-it-works-container">
                <Col >
                    <img
                        src={filePath}
                        alt={t('pa_how_it_works_label')}
                    />
                    <Button className="btn btn-bg-primary rounded-pill btn-lg">
                        Start Your Journey
                    </Button></Col>
            </Row>
        </Container>
    )
}

AnyoneCanCodeSectionWidget.propTypes = {
}

export default AnyoneCanCodeSectionWidget;
