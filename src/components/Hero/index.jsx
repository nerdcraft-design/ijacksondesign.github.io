import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Hero() {
  return (
    <>
      <section className="fadeInUp-animation py-3 py-md-5 py-xxl-6" id="hero">
        <Container fluid="xl" className="text-white">
          <Row className="align-items-center justify-content-between">
            <Col xs={12} lg={6} className="mb-5 mb-md-0">
              <Container fluid className="p-0">
                <Row>
                  <Col className="col-auto">
                    <p className="prehead m-0">
                      Hello! I'm Ian Jackson and I'm a
                    </p>
                  </Col>
                  <Col className="align-self-center d-none d-sm-block">
                    <hr />
                  </Col>
                </Row>
              </Container>
              <h1>
                Brand Designer Specializing in{" "}
                <br className="d-none d-md-block" />
                <span className="fst-italic">Web and Marketing Design</span>
              </h1>
              <p className="fs-3 mb-3 mb-lg-5">
                I craft strategic and engaging designs to help drive business
                and connect brands to their audiences.
              </p>
              <Button
                as="a"
                href="#portfolio"
                variant="primary"
                size="lg"
                className="me-3 mb-3 mb-sm-0"
              >
                Check Out My Work
              </Button>
              <Button
                as="a"
                href="/resume/ian-jackson-resume.pdf"
                target="_blank"
                variant="outline-light"
                size="lg"
                className="btn-download"
              >
                View Resume
              </Button>
            </Col>
            <Col xs={12} lg={6} xl={5} className="d-md-none d-lg-block">
              <img
                src="/ian-jackson-headshot.png"
                className="w-100"
                alt="Portait headshot of Ian Jackson"
              ></img>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
