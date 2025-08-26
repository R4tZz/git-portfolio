import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ExperienceSection = styled.section`
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

const Timeline = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

    @media (max-width: 768px) {
      left: 20px;
    }

    @media (max-width: 480px) {
      left: 15px;
    }
  }
`;

const ExperienceItem = styled.div`
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  justify-content: ${(props) =>
    props.index % 2 === 0 ? "flex-start" : "flex-end"};
  align-items: center;

  @media (max-width: 768px) {
    margin-left: 40px;
    justify-content: flex-start;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-left: 35px;
    margin-bottom: 2.5rem;
  }
`;

const ExperienceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  width: 45%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(102, 126, 234, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 12px;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  border: 3px solid #0a0a0a;
  z-index: 2;

  @media (max-width: 768px) {
    left: 20px;
    transform: translateX(-50%);
  }

  @media (max-width: 480px) {
    left: 15px;
    transform: translateX(-50%);
  }
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
`;

const JobTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const Duration = styled.p`
  color: #aaaaaa;
  font-style: italic;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Location = styled.p`
  color: #aaaaaa;
  margin-bottom: 1.5rem;
`;

const Responsibilities = styled.ul`
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

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.05, // Lower threshold for better mobile compatibility
    triggerOnce: true,
    rootMargin: "0px 0px -30px 0px", // Trigger animation 30px before element comes into view
  });

  const experiences = [
    {
      company: "Solteq Plc",
      title: "Test Automation Engineer",
      duration: "September 2022 – Present",
      location: "Warsaw, Poland",
      responsibilities: [
        "Lead test automation initiatives for e-commerce web applications",
        "Develop and maintain comprehensive test suites using Playwright, Cypress, and Python automation frameworks (Robot Framework)",
        "Implement CI/CD pipelines with GitHub Actions, Jenkins, and Docker for continuous delivery",
        "Collaborate with cross-functional distributed teams to ensure seamless delivery and quality assurance",
        "Conduct performance testing using Artillery to ensure application scalability and reliability",
        "Manage test environments and coordinate testing activities across multiple product releases",
      ],
    },
    {
      company: "Telefónica Germany",
      title: "Data Engineer & BI Consultant",
      duration: "January 2019 – July 2022",
      location: "Warsaw, Poland",
      responsibilities: [
        "Developed Business Assurance solutions using WeDo RAID software for telecommunications analytics and usage control",
        "Built data pipelines processing large volumes of daily records using WeDo RAID software, PL/SQL, and Oracle databases",
        "Created interactive dashboards and KPIs for executive reporting and operational monitoring",
        "Designed ETL processes and shell scripts for automated data processing and system optimization",
        "Implemented CI/CD practices using Jenkins, Robot Framework, and Git",
        "Collaborated with telecom analysts to identify and resolve revenue assurance issues and system anomalies",
      ],
    },
    {
      company: "Truphone",
      title: "System and Database Administrator",
      duration: "August 2017 – December 2018",
      location: "Warsaw & Lisbon",
      responsibilities: [
        "Administered multi-database environments (MongoDB, MySQL, MSSQL, Oracle) supporting enterprise operations",
        "Developed automation scripts for backup, monitoring, and maintenance tasks",
        "Ensured high availability through proactive monitoring and performance optimization",
        "Implemented database security protocols and disaster recovery procedures",
      ],
    },
    {
      company: "WeDo Technologies (Mobileum)",
      title: "BI Consultant",
      duration: "August 2015 – July 2017",
      location: "Lisbon, Portugal",
      responsibilities: [
        "Developed Business Assurance solutions using WeDo RAID software for telecommunications analytics and usage control",
        "Built data pipelines processing large volumes of daily records using WeDo RAID software, PL/SQL, and Oracle databases",
        "Created interactive dashboards and KPIs for executive reporting and operational monitoring",
        "Designed ETL processes and shell scripts for automated data processing and system optimization",
        "Collaborated with telecom analysts to identify and resolve revenue assurance issues and system anomalies",
      ],
    },
    {
      company: "Medidata.Net",
      title: "IT Consultant",
      duration: "May 2014 – January 2015",
      location: "Portugal",
      responsibilities: [
        "Implemented municipal management systems using MEDIDATA software for government agencies",
        "Provided technical support and training for system implementation and user adoption",
        "Customized software solutions to meet specific municipal requirements",
      ],
    },
    {
      company: "Câmara Municipal de Ferreira do Alentejo",
      title: "Engineering Intern",
      duration: "September 2013 – May 2014",
      location: "Ferreira do Alentejo, Portugal",
      responsibilities: [
        "Contributed to mobile application development using Android, PHP, and MySQL",
        "Participated in ETL projects using Pentaho for data integration and reporting",
        "Assisted in web development and database design projects",
      ],
    },
  ];

  return (
    <ExperienceSection id="experience" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Experience</SectionTitle>
          <SectionSubtitle>
            My work experience as a software engineer and working on different
            companies and projects
          </SectionSubtitle>

          <Timeline>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <ExperienceItem index={index}>
                  <ExperienceCard>
                    <CompanyName>{exp.company}</CompanyName>
                    <JobTitle>{exp.title}</JobTitle>
                    <Duration>{exp.duration}</Duration>
                    <Location>📍 {exp.location}</Location>
                    <Responsibilities>
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </Responsibilities>
                  </ExperienceCard>
                  <TimelineDot />
                </ExperienceItem>
              </motion.div>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
