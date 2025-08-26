import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const EducationSection = styled.section`
  padding: 100px 0;
  background: #0a0a0a;

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

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const EducationCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(102, 126, 234, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const EducationIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 2rem;
  color: white;
`;

const Degree = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const Institution = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 0.5rem;
`;

const Department = styled.p`
  color: #aaaaaa;
  margin-bottom: 1rem;
  font-style: italic;
`;

const Duration = styled.p`
  color: #aaaaaa;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const Highlights = styled.div`
  text-align: left;
`;

const HighlightTitle = styled.h5`
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const HighlightList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    color: #cccccc;
    line-height: 1.6;

    &::before {
      content: "▸";
      position: absolute;
      left: 0;
      color: #667eea;
      font-weight: bold;
    }
  }
`;

const LanguagesSection = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

const LanguagesTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const LanguagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const LanguageCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(102, 126, 234, 0.3);
  }
`;

const LanguageFlag = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;

  .fi {
    width: 36px !important;
    height: 24px !important;
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    border: none !important;
    border-radius: 3px;
    display: block !important;
    line-height: 1 !important;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const LanguageName = styled.h4`
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const LanguageLevel = styled.p`
  color: #667eea;
  font-weight: 500;
`;

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "0px 0px -50px 0px",
  });

  const education = [
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "Instituto Politécnico de Beja",
      department: "Escola Superior de Tecnologia e Gestão",
      duration: "2008 – 2012",
      icon: "🎓",
      highlights: [
        "Specialized in Software Engineering and Systems Development",
        "Coursework in Database Systems, Network Administration, and Web Development",
        "Final project focused on mobile application development",
        "Strong foundation in programming languages including Java, C++, and SQL",
      ],
    },
  ];

  const languages = [
    {
      name: "Portuguese",
      level: "Native",
      flag: "pt", // Portugal flag code
    },
    {
      name: "English",
      level: "C2 Proficient",
      flag: "gb", // Great Britain flag code
    },
  ];

  return (
    <EducationSection id="education" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Education</SectionTitle>
          <SectionSubtitle>
            My education has been a journey of self-discovery and growth. My
            educational details are as follows.
          </SectionSubtitle>

          <EducationGrid>
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <EducationCard>
                  <EducationIcon>{edu.icon}</EducationIcon>
                  <Degree>{edu.degree}</Degree>
                  <Institution>{edu.institution}</Institution>
                  <Department>{edu.department}</Department>
                  <Duration>{edu.duration}</Duration>
                  <Highlights>
                    <HighlightTitle>Key Highlights:</HighlightTitle>
                    <HighlightList>
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </HighlightList>
                  </Highlights>
                </EducationCard>
              </motion.div>
            ))}
          </EducationGrid>

          <LanguagesSection>
            <LanguagesTitle>🌍 Languages</LanguagesTitle>
            <LanguagesGrid>
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                >
                  <LanguageCard>
                    <LanguageFlag>
                      <span className={`fi fi-${language.flag}`}></span>
                    </LanguageFlag>
                    <LanguageName>{language.name}</LanguageName>
                    <LanguageLevel>{language.level}</LanguageLevel>
                  </LanguageCard>
                </motion.div>
              ))}
            </LanguagesGrid>
          </LanguagesSection>
        </motion.div>
      </Container>
    </EducationSection>
  );
};

export default Education;
