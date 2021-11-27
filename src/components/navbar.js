import { Container, Navbar, NavLink, OverlayTrigger, Popover } from "react-bootstrap";
import "./navbar.css";
import logo from "../shared/images/logo.png";
import Button from "@restart/ui/esm/Button";
import CoursesNavbar from "./courses-navbar";

function AppNavbar() {
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
                    <Button className="btn btn-primary rounded-pill">Enterprise</Button>
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
