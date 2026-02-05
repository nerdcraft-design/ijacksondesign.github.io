import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import projectData from "../../projects.json";

const projects = projectData.projects;

export default function Portfolio() {
  return (
    <>
      <section className="py-3 py-md-5 py-xxl-6" id="portfolio">
        <Container fluid="xl" className="text-white">
          <h2 className="display-4 mb-5">Portfolio</h2>
          <Row>
            {projects.map((project, i) => (
              <Col xs={12}>
                <Link
                  to={`/portfolio/${project.projectUrl}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card className="mb-5 portfolio-item" bg="dark" text="light">
                    <Row className="flex-column flex-md-row">
                      <Col
                        xs={{ span: 12, order: 2 }}
                        md={{ span: 6, order: 1 }}
                      >
                        <Card.Body className="h-100 p-3 p-lg-5">
                          <Row className="h-100 flex-column justify-content-between">
                            <Col className="mb-5">
                              <h3>{project.name}</h3>
                              <h4 className="mb-3">{project.tagline}</h4>
                              {project.categories.map((category) => (
                                <Badge className="me-2 mb-2">{category}</Badge>
                              ))}
                            </Col>
                            <Col>
                              <div className="h-100 d-flex align-items-end">
                                <Link
                                  to={`/portfolio/${project.projectUrl}`}
                                  className="btn btn-primary"
                                  preventScrollReset={true}
                                >
                                  Learn More
                                </Link>
                              </div>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Col>
                      <Col
                        xs={{ span: 12, order: 1 }}
                        md={{ span: 6, order: 2 }}
                      >
                        <div className="img-container">
                          <img
                            src={project.images[0].imageLink}
                            alt={project.images[0].imageAlt}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
