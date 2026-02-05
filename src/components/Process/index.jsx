import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Process() {
  return (
    <>
      <section className="py-5" id="process">
        <Container fluid="xl" className="text-center">
          <h2 className="text-white display-4 mb-5">My Process</h2>
          <Row className="justify-content-center align-items-stretch row-cols-1 row-cols-md-2 row-cols-xl-4 g-3">
            <Col className="align-self-stretch">
              <Card bg="transparent" text="light" className="process-card">
                <div className="rounded p-3">
                  <Card.Img
                    src="/process/process-step-1.jpg"
                    className="process-img"
                    alt="Ian Jackson on a video call with a client."
                  />
                </div>

                <Card.Body className="text-start">
                  <h3>1. Brief</h3>
                  <Card.Text>
                    Good design is about storytelling and communication. But
                    before you can create good design, you need to have clear
                    goals. A brief sets the tone for the project so you can save
                    time and ensure the final output aligns with strategic
                    goals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="align-self-stretch">
              <Card bg="transparent" text="light" className="process-card">
                <div className="rounded p-3">
                  <Card.Img
                    src="/process/process-step-2.jpg"
                    className="process-img"
                    alt="Ian Jackson looking through a Pantone color swatch book."
                  />
                </div>
                <Card.Body className="text-start">
                  <h3>2. Research</h3>
                  <Card.Text>
                    After defining the brief, I like to spend some time
                    researching to help find creative solutions. Who is the
                    audience? What do they like? What can be done beyond the
                    obvious? What should I stay away from?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="align-self-stretch">
              <Card bg="transparent" text="light" className="process-card">
                <div className="rounded p-3">
                  <Card.Img
                    src="/process/process-step-3.jpg"
                    className="process-img"
                    alt="Ian Jackson working on logo variations."
                  />
                </div>
                <Card.Body className="text-start">
                  <h3>3. Design</h3>
                  <Card.Text>
                    Sketches. Wireframes. Mood boards. Word clouds. All of these
                    can happen here in the design phase to make sure each
                    solution is hand-crafted to meet the needs of each project.
                    This is where the fun happens and the project really comes
                    to life.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="align-self-stretch">
              <Card bg="transparent" text="light" className="process-card">
                <div className="rounded p-3">
                  <Card.Img
                    src="/process/process-step-4.jpg"
                    className="process-img"
                    alt="Ian Jackson on his computer refining a logo."
                  />
                </div>
                <Card.Body className="text-start">
                  <h3>4. Refine & Deliver</h3>
                  <Card.Text>
                    After the concept reveal, I move into refinement and
                    production. Ideas and concepts are tweaked and refined until
                    the perfect solution is found. Deliverables change from
                    project to project, but happiness and success is always the
                    final product.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
