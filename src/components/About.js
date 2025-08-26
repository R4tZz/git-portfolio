import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = styled.section`
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
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const TextContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #cccccc;

  p {
    margin-bottom: 1.5rem;
  }

  .highlight {
    color: #667eea;
    font-weight: 600;
  }
`;

const PersonalityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const PersonalityCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(102, 126, 234, 0.3);
  }
`;

const CardIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const CardDescription = styled.p`
  color: #aaaaaa;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`;

const JourneySection = styled.div`
  text-align: center;
`;

const JourneyTitle = styled.h3`
  color: #667eea;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const JourneyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const JourneyItem = styled.div`
  text-align: center;
`;

const JourneyIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  color: white;
`;

const JourneyLabel = styled.h4`
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const JourneyDesc = styled.p`
  color: #aaaaaa;
  font-size: 0.9rem;
  margin: 0;
`;

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <AboutSection id="about" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>About Me</SectionTitle>

          <AboutContent>
            <MainContent>
              <TextContent>
                <p>
                  Since childhood, I've been driven by curiosity about how
                  things work - dismantling toys and reassembling them to see if
                  they still functioned. This natural inclination led me to the
                  IT world, where I discovered my passion for creating tools
                  that <span className="highlight">automate routine tasks</span>{" "}
                  and improve processes.
                </p>

                <p>
                  Over the past <span className="highlight">6+ years</span>,
                  I've specialized as a QA and Test Automation Engineer,
                  focusing on automation frameworks, data engineering, and
                  telecommunications systems. I have a proven track record of
                  designing
                  <span className="highlight">
                    {" "}
                    scalable test automation solutions
                  </span>{" "}
                  and integrating them into CI/CD pipelines.
                </p>

                <p>
                  My technical expertise includes{" "}
                  <span className="highlight">
                    Python, JavaScript/TypeScript, ETL processes, and SQL
                  </span>
                  , with hands-on experience in Playwright, Cypress, and Robot
                  Framework. I enjoy solving complex problems and continuously
                  learning new technologies.
                </p>
              </TextContent>

              <PersonalityGrid>
                <PersonalityCard>
                  <CardIcon>🔍</CardIcon>
                  <CardTitle>Problem Solver</CardTitle>
                  <CardDescription>
                    I thrive on identifying issues and creating elegant
                    solutions that improve efficiency and reliability.
                  </CardDescription>
                </PersonalityCard>

                <PersonalityCard>
                  <CardIcon>🚀</CardIcon>
                  <CardTitle>Continuous Learner</CardTitle>
                  <CardDescription>
                    Always exploring new technologies and methodologies to stay
                    ahead in the rapidly evolving tech landscape.
                  </CardDescription>
                </PersonalityCard>

                <PersonalityCard>
                  <CardIcon>⚡</CardIcon>
                  <CardTitle>Automation Enthusiast</CardTitle>
                  <CardDescription>
                    Passionate about automating repetitive tasks to free up time
                    for creative and strategic work.
                  </CardDescription>
                </PersonalityCard>

                <PersonalityCard>
                  <CardIcon>🤝</CardIcon>
                  <CardTitle>Team Collaborator</CardTitle>
                  <CardDescription>
                    Experienced in working with distributed teams and
                    contributing to cross-functional projects.
                  </CardDescription>
                </PersonalityCard>
              </PersonalityGrid>
            </MainContent>

            <JourneySection>
              <JourneyTitle>My Professional Journey</JourneyTitle>
              <JourneyGrid>
                <JourneyItem>
                  <JourneyIcon>🎓</JourneyIcon>
                  <JourneyLabel>Education</JourneyLabel>
                  <JourneyDesc>
                    Computer Engineering background with focus on practical
                    applications
                  </JourneyDesc>
                </JourneyItem>

                <JourneyItem>
                  <JourneyIcon>💾</JourneyIcon>
                  <JourneyLabel>Database Admin</JourneyLabel>
                  <JourneyDesc>
                    Started with system administration and database management
                  </JourneyDesc>
                </JourneyItem>

                <JourneyItem>
                  <JourneyIcon>📊</JourneyIcon>
                  <JourneyLabel>Data Engineering</JourneyLabel>
                  <JourneyDesc>
                    Evolved into BI consulting and ETL pipeline development
                  </JourneyDesc>
                </JourneyItem>

                <JourneyItem>
                  <JourneyIcon>🤖</JourneyIcon>
                  <JourneyLabel>Test Automation</JourneyLabel>
                  <JourneyDesc>
                    Now specializing in comprehensive test automation solutions
                  </JourneyDesc>
                </JourneyItem>
              </JourneyGrid>
            </JourneySection>
          </AboutContent>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About;
