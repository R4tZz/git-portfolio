import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);

  @media (max-width: 768px) {
    padding: 80px 0;
  }

  @media (max-width: 480px) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 480px) {
    padding: 0 15px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #aaaaaa;
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactContent = styled.div`
  display: flex;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

const ContactInfo = styled.div``;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(102, 126, 234, 0.3);
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const ContactDetails = styled.div``;

const ContactLabel = styled.h4`
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const ContactValue = styled.p`
  color: #aaaaaa;
  margin: 0;
`;

const ContactLink = styled.a`
  color: #667eea;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #764ba2;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667eea;
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    transform: translateY(-3px);
    border-color: transparent;
  }

  img {
    width: 24px;
    height: 24px;
    filter: brightness(0) saturate(100%) invert(43%) sepia(96%) saturate(1073%)
      hue-rotate(217deg) brightness(96%) contrast(88%);
  }

  &:hover img {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%)
      hue-rotate(93deg) brightness(103%) contrast(103%);
  }

  svg {
    width: 24px;
    height: 24px;
    fill: #667eea;
  }

  &:hover svg {
    fill: white;
  }

  .emoji {
    font-size: 1.5rem;
  }
`;

const Footer = styled.footer`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: #aaaaaa;
`;

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "0px 0px -50px 0px",
  });

  const contactInfo = [
    {
      icon: "📍",
      label: "Location",
      value: "Warsaw, Poland",
    },
    {
      icon: "📧",
      label: "Email",
      value: "goncalo.moura@live.com.pt",
      link: "mailto:goncalo.moura@live.com.pt",
    },
  ];

  return (
    <ContactSection id="contact" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Contact</SectionTitle>
          <SectionSubtitle>
            Feel free to reach out to me for any questions or opportunities!
          </SectionSubtitle>

          <ContactContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ width: "100%" }}
            >
              <ContactInfo>
                {contactInfo.map((item, index) => (
                  <ContactItem key={item.label}>
                    <ContactIcon>{item.icon}</ContactIcon>
                    <ContactDetails>
                      <ContactLabel>{item.label}</ContactLabel>
                      <ContactValue>
                        {item.link ? (
                          <ContactLink href={item.link}>
                            {item.value}
                          </ContactLink>
                        ) : (
                          item.value
                        )}
                      </ContactValue>
                    </ContactDetails>
                  </ContactItem>
                ))}
              </ContactInfo>
            </motion.div>
          </ContactContent>

          <SocialLinks>
            <SocialLink
              href="https://www.linkedin.com/in/gon%C3%A7alo-moura-801695126/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialLink>
            <SocialLink
              href="https://github.com/R4tZz"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="GitHub"
              />
            </SocialLink>
          </SocialLinks>

          <Footer>
            <p>© 2025 Gonçalo Moura. All rights reserved.</p>
          </Footer>
        </motion.div>
      </Container>
    </ContactSection>
  );
};

export default Contact;
