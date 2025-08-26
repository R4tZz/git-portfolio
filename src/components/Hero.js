import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import profileImage from "../profile.jpg";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
    gap: 1.5rem;
  }
`;

const TextContent = styled.div`
  z-index: 10;
  position: relative;
`;

const Greeting = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #667eea;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff 0%, #667eea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    line-height: 1.2;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: #cccccc;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    line-height: 1.4;
    margin-bottom: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  color: #aaaaaa;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;
  position: relative;
  z-index: 20;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 1.5rem;
  }
`;

const ResumeButton = styled.a`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white !important;
  padding: 15px 30px;
  border-radius: 8px;
  text-decoration: none !important;
  font-weight: 600;
  font-size: 1rem;
  display: inline-block;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
    color: white !important;
    text-decoration: none !important;
  }

  &:visited {
    color: white !important;
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    padding: 12px 25px;
    font-size: 0.95rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: #0a0a0a;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;

const ActualProfileImage = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 50%;
  object-fit: cover;
  z-index: 2;
  position: relative;
  /* Add image optimization */
  image-rendering: optimizeQuality;
`;

const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
`;

const FloatingElement = styled.div`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea20 0%, #764ba220 100%);
  animation: float 6s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <FloatingElements>
        <FloatingElement
          size={80}
          delay={0}
          style={{ top: "10%", left: "10%" }}
        />
        <FloatingElement
          size={60}
          delay={2}
          style={{ top: "70%", left: "85%" }}
        />
        <FloatingElement
          size={40}
          delay={4}
          style={{ top: "20%", right: "20%" }}
        />
      </FloatingElements>

      <HeroContent>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TextContent>
            <Greeting>Hi, I am</Greeting>
            <Name>Gonçalo Moura</Name>
            <Title>
              Test Automation Engineer | QA Specialist | Data & BI Consultant
            </Title>
            <Description>
              I am a motivated and versatile individual, always eager to take on
              new challenges. With a passion for learning and 6+ years of
              experience in test automation, I am dedicated to delivering
              high-quality results and innovative solutions.
            </Description>
            <ButtonGroup>
              <ResumeButton
                href="https://drive.google.com/file/d/1K9FwIG8NzJJKtBIr3Q1ASx3g2e-NAvOw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 Check Resume
              </ResumeButton>
            </ButtonGroup>
          </TextContent>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ImageContainer>
            <ProfileImage>
              <ActualProfileImage
                src={profileImage}
                alt="Gonçalo Moura Profile Picture"
              />
            </ProfileImage>
          </ImageContainer>
        </motion.div>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
