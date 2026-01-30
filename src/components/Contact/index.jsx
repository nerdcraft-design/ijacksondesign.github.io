import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function Contact() {
  return (
    <>
      <section className="bg-primary py-5 mb-5" id="contact">
        <Container fluid="xl" className="fadeInUp-animation text-center">
          <h2 className="display-5 mb-4">
            Want to Talk? <br className="d-md-none" /> Let's Connect!
          </h2>
          <Button
            as="a"
            href="mailto:ian@ianjacksondesign.com?subject=Design Work"
            target="_blank"
            variant="outline-secondary"
            size="lg"
            className="me-3 btn-email"
          >
            Email Me
          </Button>
          <Button
            as="a"
            href="https://www.linkedin.com/in/ijacksondesign/"
            target="_blank"
            variant="outline-secondary"
            size="lg"
            className="btn-linkedin"
          >
            LinkedIn
          </Button>
        </Container>
      </section>
    </>
  );
}
