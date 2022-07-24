import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useEffect, useState} from "react";
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }

        window.addEventListener("scroll", onscroll);
        return () => window.removeEventListener("scroll", onscroll);
    }, [])
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar bg="" expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt={'LOGO'}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className={"navbar-toogler-icon"}></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"
                                  onClick={() => onUpdateActiveLink('home')}
                                  className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
                        <Nav.Link href="#skills"
                                  onClick={() => onUpdateActiveLink('skills')}
                                  className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}>Stats</Nav.Link>
                        <Nav.Link href="#projects"
                                  onClick={() => onUpdateActiveLink('projects')}
                                  className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
                    </Nav>
                    <span className={"navbar-text"}><div className={"social-icon"}>
                        <a href={"#"}><img src={navIcon1} alt=""/></a>
                        <a href={"#"}><img src={navIcon2} alt=""/></a>
                        <a href={"#"}><img src={navIcon3} alt=""/></a>
                    </div></span>
                    <button className={""} onClick={() => console.log('connect')}><span>Connect with us</span>
                    </button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}