import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import projectData from "../../projects.json";

export default function ProjectItem() {
  const { pathname } = useLocation();
  const { projectUrl } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const matchedProject = projectData.projects.find(
      (item) => item.projectUrl === projectUrl,
    );
    setProject(matchedProject);
  }, [projectUrl]);

  if (project === null) {
    return <Spinner animation="border" variant="primary" />;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section id="project">
        <Container fluid="xl" className="text-white py-5 py-xxl-6">
          <h1>{project.name}</h1>
          <h2 className="mb-3">{project.tagline}</h2>
          <div className="mb-5">
            {project.categories.map((category) => (
              <Badge className="me-2 mb-2">{category}</Badge>
            ))}
          </div>
          <Row className="mb-5 justify-content-between">
            <Col xs={12} md={6} className="mb-5 mb-md-0">
              <h3>Project Description</h3>
              <p>{project.projectDescription}</p>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <h3>Deliverables</h3>
              <ul>
                {project.deliverables.map((category) => (
                  <li>{category}</li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row className="g-3">
            {project.images.map((img) => (
              <Col xs={12} lg={6}>
                <Image
                  src={img.imageLink}
                  alt={img.imageAlt}
                  fluid
                  loading="eager"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
