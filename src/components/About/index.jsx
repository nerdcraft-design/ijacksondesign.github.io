import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <>
      <section className="py-3 py-md-5 py-xxl-6" id="about">
        <Container fluid="xl" className="text-white">
          <Row className="align-items-center justify-content-between">
            <Col xs={12} lg={6} className="mb-5 mb-md-0">
              <Container fluid className="p-0">
                <Row>
                  <Col className="col-auto">
                    <p className="prehead m-0">Who I Am</p>
                  </Col>
                  <Col className="align-self-center d-none d-sm-block">
                    <hr />
                  </Col>
                </Row>
              </Container>
              <h1 className="display-4">Designer + Coder</h1>
              <div className="mb-3 mb-lg-5">
                <p>
                  <strong>
                    Creativity and storytelling has always been at the heart of
                    what I do
                  </strong>
                  .
                </p>
                <p>
                  I became interested in design at an early age back in the days
                  of Myspace where I created custom layouts and made them
                  available for others.
                </p>
                <p>
                  Now, 20 years and
                  <strong> 15 years of professional experience</strong> later,
                  I'm still creating unique designs, except now I do it to help
                  businesses.
                </p>
                <p>
                  Over my career I have always worked as a creative whether it
                  was as a screen printer, or doing agency work for brands like
                  <strong> Harley-Davidson</strong> and
                  <strong> MasterCraft</strong>, or leading the creative
                  direction for marketing campaigns as an in-house designer or
                  when pursuing my own adventures.
                </p>
              </div>
            </Col>
            <Col xs={12} lg={6} xl={5} className="d-md-none d-lg-block">
              <img
                src="/ian-jackson-headshot-2.png"
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
