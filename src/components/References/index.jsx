import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function References() {
  return (
    <>
      <section className="py-5 py-xxl-6">
        <Container fluid="xl" className="text-center">
          <h2 className="prehead">References</h2>
          <h3 className="text-white display-4 mb-5">Word of Mouth</h3>
          <Row className="justify-content-center align-items-stretch row-cols-1 row-cols-lg-3">
            <Col className="mb-5 mb-lg-0">
              <Card
                bg="dark"
                text="light"
                border="secondary"
                className="p-4 p-xxl-5 h-100 testimonial"
              >
                <Card.Body className="text-start">
                  <Card.Text>
                    In a word, Ian is brilliant. We worked together on a number
                    of projects and while we had to stay within particular brand
                    guidelines, he was still able to create unique and exciting
                    assets for our client. He is extremely knowledgeable while
                    still flexible and open to creative discussion. I am
                    confident his next company will benefit from his expertise.
                  </Card.Text>
                  <p className="fs-5 fw-bold mb-0">Lucia Sherman</p>
                  <p>Program Manager | Parr Moto</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-5 mb-lg-0">
              <Card
                bg="dark"
                text="light"
                border="secondary"
                className="p-4 p-xxl-5 h-100 testimonial"
              >
                <Card.Body className="text-start">
                  <Card.Text>
                    Ian's growth during his time here was amazing. He came to
                    the position with considerable talent and ability for a
                    college student and expanded upon that by becoming a
                    critical thinker, exemplary collaborator and consistently
                    productive and important part of our team. I was constantly
                    impressed by his ability to take in feedback and guidance
                    and deliver work that exceeded the input he was given. When
                    offered the chance to create from scratch, he constantly
                    provided thoughtful and diverse work.
                  </Card.Text>
                  <p className="fs-5 fw-bold mb-0">David Grant</p>
                  <p>Owner/President | Parr Moto</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-5 mb-lg-0">
              <Card
                bg="dark"
                text="light"
                border="secondary"
                className="p-4 p-xxl-5 h-100 testimonial"
              >
                <Card.Body className="text-start">
                  <Card.Text>
                    Ian Jackson truly made our podcast come to life. We came to
                    Ian with a nebulous idea, and he listened and brought
                    several innovative ideas that really impressed us. Ian went
                    above and beyond, delivering the perfect logo with
                    variations, brand guidelines, and social backgrounds, all in
                    a very timely manner. We had a great experience and would
                    recommend Ian to anyone looking for a designer who
                    approaches each client's unique needs with excitement,
                    curiosity, and creativity.
                  </Card.Text>
                  <p className="fs-5 fw-bold mb-0">Amanda Jeppson</p>
                  <p>Podcaster | Mysteries & Misdeeds</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
