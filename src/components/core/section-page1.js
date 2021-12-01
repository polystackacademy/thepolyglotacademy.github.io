import { Col, Container, Row, Button } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

export default function Section1Page() {
    const { t, i18n } = useTranslation();
    const filePath = "/images/intro-" + i18n.language + ".gif";
    return (
        <Container fluid="sm" className="container-section1">
            <Row>
                <Col>
                    <h1 className="heading">
                        {t('pa_section1_title')}
                    </h1>
                    <p className="message">
                        {t('pa_section1_subtitle')}
                    </p>
                    <div className="text-center">
                        <Button className="rounded-pill align-self-center btn-lg try-button">{t('pa_try_free_btn_label')}</Button>
                    </div>
                </Col>
                <Col>
                    <img
                        src={filePath}
                        className="intro-video"
                        alt="Introduction Video"
                    />
                </Col>
            </Row>
        </Container>
    )
}
