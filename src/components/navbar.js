import { Container, Navbar, NavDropdown, NavLink, OverlayTrigger, Popover } from "react-bootstrap";
import "./navbar.css";
import logo from "../shared/images/logo.png";
import Button from "@restart/ui/esm/Button";
import CoursesNavbar from "./courses-navbar";
import { useTranslation } from 'react-i18next';
import { PaLanguageSupport } from '../shared/constants';

function AppNavbar() {
    const { t, i18n } = useTranslation();
    return (
        <Navbar expand="lg" className="app-navbar">
            <Container fluid="sm">
                <div className="app-navbar-brand">
                    <Navbar.Brand>
                        <img
                            src={logo}
                            width="150rem"
                            className="d-inline-block align-top"
                            alt="The Polyglot Academy"
                        />
                    </Navbar.Brand>
                    <div className="vr"></div>
                    <Button className="btn btn-primary rounded-pill">{t('PA_Enterprise_Btn_Label')}</Button>
                    <NavDropdown title={PaLanguageSupport[i18n.language]?.langKey}>
                        {Object.keys(PaLanguageSupport).map((lng) => (
                            <NavDropdown.Item key={lng} onClick={() => i18n.changeLanguage(lng)}>
                                {PaLanguageSupport[lng].langKey}</NavDropdown.Item>
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
                        <NavLink>Browse Courses</NavLink>
                    </OverlayTrigger>
                    <Button className="btn btn-primary rounded-pill me-2">Free 3 Month Trial</Button>
                    <NavLink>Login</NavLink>
                </div>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;
