import { Container, Navbar, NavDropdown, NavLink, OverlayTrigger, Popover } from "react-bootstrap";
import "./navbar.css";
import Button from "@restart/ui/esm/Button";
import { useTranslation } from 'react-i18next';
import CoursesNavbar from "./courses-navbar";
import { LanguageProvider, PaLanguageSupport } from "../../shared/services/language-provider";

function AppNavbar() {
    const { t, i18n } = useTranslation();
    const logoPath = "/images/logo.png";
    return (
        <Navbar expand="lg" className="app-navbar">
            <Container fluid="sm">
                <div className="app-navbar-brand">
                    <Navbar.Brand>
                        <img
                            src={logoPath}
                            width="150rem"
                            className="d-inline-block align-top"
                            alt="The Polyglot Academy"
                        />
                    </Navbar.Brand>
                    <div className="vr"></div>
                    <Button className="btn btn-primary rounded-pill">{t('pa_enterprise_btn_label')}</Button>
                    <NavDropdown className="app-navbar-lang-dropdown" title={LanguageProvider(i18n.language)?.langKey}>
                        {Object.keys(PaLanguageSupport).map((lng) => (
                            <NavDropdown.Item key={lng} onClick={() => i18n.changeLanguage(lng)}>
                                {LanguageProvider(lng).langKey}</NavDropdown.Item>
                        ))}
                    </NavDropdown>
                </div>
                <div className="d-flex">
                    <OverlayTrigger
                        trigger="click"
                        key="bottom"
                        placement="bottom"
                        overlay={
                            <Popover className="navbar-popover">
                                <Popover.Body className="navbar-popover-body">
                                    <CoursesNavbar />
                                </Popover.Body>
                            </Popover>
                        }
                    >
                        <NavLink>{t('pa_browse_courses_label')}</NavLink>
                    </OverlayTrigger>
                    <Button className="btn btn-primary rounded-pill me-2">{t('pa_try_3Month_btn_label')}</Button>
                    <NavLink>{t('pa_login_btn_label')}</NavLink>
                </div>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;