import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectsSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
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
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${(props) =>
    props.active
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      : "transparent"};
  color: ${(props) => (props.active ? "white" : "#667eea")};
  border: 2px solid #667eea;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    transform: translateY(-2px);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(102, 126, 234, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667eea;
  font-size: 3rem;
  font-weight: bold;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const ProjectDuration = styled.p`
  color: #aaaaaa;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(102, 126, 234, 0.2);
  color: #667eea;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #764ba2;
  }
`;

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [filter, setFilter] = useState("ALL");

  const projects = [
    {
      title: "E-commerce Test Automation Suite",
      duration: "2023 - Present",
      description:
        "Comprehensive test automation framework for e-commerce platforms using Playwright and Cypress. Includes API testing, UI testing, and performance testing with CI/CD integration.",
      tech: ["Playwright", "Cypress", "JavaScript", "GitHub Actions", "Docker"],
      category: "Automation",
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      title: "Revenue Assurance Dashboard",
      duration: "2021 - 2022",
      description:
        "Interactive BI dashboard for telecommunications revenue assurance using WeDo RAID. Real-time monitoring of revenue streams and anomaly detection.",
      tech: ["WeDo RAID", "Oracle", "PL/SQL", "JavaScript", "ETL"],
      category: "Data Engineering",
      links: {
        github: "#",
      },
    },
    {
      title: "CI/CD Pipeline Automation",
      duration: "2022 - Present",
      description:
        "Automated deployment pipeline with Jenkins and Docker, including test automation, code quality checks, and monitoring.",
      tech: ["Jenkins", "Docker", "Robot Framework", "Git", "Linux"],
      category: "DevOps",
      links: {
        github: "#",
      },
    },
    {
      title: "Database Performance Monitor",
      duration: "2018 - 2019",
      description:
        "Multi-database monitoring solution for MongoDB, MySQL, and Oracle environments with automated alerting and performance optimization.",
      tech: ["Python", "MongoDB", "MySQL", "Oracle", "Shell Script"],
      category: "Database",
      links: {
        github: "#",
      },
    },
    {
      title: "Mobile Test Automation Framework",
      duration: "2020 - 2021",
      description:
        "Cross-platform mobile testing framework supporting Android and iOS applications with parallel execution capabilities.",
      tech: ["Appium", "Python", "Android", "iOS", "Selenium Grid"],
      category: "Automation",
      links: {
        github: "#",
      },
    },
    {
      title: "Data Pipeline ETL System",
      duration: "2019 - 2020",
      description:
        "Scalable ETL system processing millions of telecom records daily with data validation, transformation, and reporting capabilities.",
      tech: ["Python", "Apache Airflow", "PostgreSQL", "Redis", "Docker"],
      category: "Data Engineering",
      links: {
        github: "#",
      },
    },
  ];

  const categories = [
    "ALL",
    "Automation",
    "Data Engineering",
    "DevOps",
    "Database",
  ];

  const filteredProjects =
    filter === "ALL"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <ProjectsSection id="projects" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Projects</SectionTitle>
          <SectionSubtitle>
            I have worked on a wide range of projects from test automation to
            data engineering. Here are some of my notable projects.
          </SectionSubtitle>

          <FilterButtons>
            {categories.map((category) => (
              <FilterButton
                key={category}
                active={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </FilterButton>
            ))}
          </FilterButtons>

          <ProjectGrid>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <ProjectCard>
                  <ProjectImage>
                    {project.category === "Automation"
                      ? "🤖"
                      : project.category === "Data Engineering"
                      ? "📊"
                      : project.category === "DevOps"
                      ? "⚙️"
                      : "🗄️"}
                  </ProjectImage>
                  <ProjectContent>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDuration>{project.duration}</ProjectDuration>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>
                    <TechStack>
                      {project.tech.map((tech) => (
                        <TechTag key={tech}>{tech}</TechTag>
                      ))}
                    </TechStack>
                    <ProjectLinks>
                      {project.links.github && (
                        <ProjectLink
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub →
                        </ProjectLink>
                      )}
                      {project.links.demo && (
                        <ProjectLink
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo →
                        </ProjectLink>
                      )}
                    </ProjectLinks>
                  </ProjectContent>
                </ProjectCard>
              </motion.div>
            ))}
          </ProjectGrid>
        </motion.div>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
