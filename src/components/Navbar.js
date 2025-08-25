import React, { useState, useEffect } from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  background: ${(props) =>
    props.scrolled ? "rgba(10, 10, 10, 0.95)" : "transparent"};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(10px)" : "none")};
  -webkit-backdrop-filter: ${(props) =>
    props.scrolled ? "blur(10px)" : "none"};
  transition: all 0.3s ease;
  border-bottom: ${(props) =>
    props.scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none"};
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    gap: 1rem;
  }
`;

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #667eea;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavContent>
        <Logo>Gonçalo Moura</Logo>
        <NavLinks isOpen={isOpen}>
          <li>
            <NavLink onClick={() => scrollToSection("about")}>About</NavLink>
          </li>
          <li>
            <NavLink onClick={() => scrollToSection("skills")}>Skills</NavLink>
          </li>
          <li>
            <NavLink onClick={() => scrollToSection("experience")}>
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => scrollToSection("projects")}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => scrollToSection("education")}>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => scrollToSection("contact")}>
              Contact
            </NavLink>
          </li>
        </NavLinks>
        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          ☰
        </MobileMenuButton>
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar;
