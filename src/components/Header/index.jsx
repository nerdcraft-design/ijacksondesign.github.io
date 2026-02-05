import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export default function Header() {
  return (
    <>
      <header className="position-fixed w-100">
        <Container fluid="xxl" className="my-3">
          <Navbar
            expand="lg"
            className="w-100 px-4 bg-dark rounded-3"
            data-bs-theme="dark"
          >
            <Navbar.Brand
              href="/"
              className="fs-3 fw-bold"
              preventScrollReset={true}
            >
              Ian Jackson
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
              <Nav activeKey={location.pathname} className="ms-auto">
                <Nav.Link
                  eventKey="/"
                  href="/"
                  className="me-5"
                  preventScrollReset={true}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  eventKey="/#portfolio"
                  href="/#portfolio"
                  className="me-5"
                  preventScrollReset={true}
                >
                  Portfolio
                </Nav.Link>
                <Nav.Link
                  eventKey="/#process"
                  href="/#process"
                  className="me-5"
                  preventScrollReset={true}
                >
                  Process
                </Nav.Link>
                <Nav.Link
                  eventKey="/#about"
                  href="/#about"
                  className="me-5"
                  preventScrollReset={true}
                >
                  About
                </Nav.Link>
                <Button
                  as="a"
                  href="mailto:ian@ianjacksondesign.com?subject=Design Work"
                  target="_blank"
                  variant="outline-light"
                  preventScrollReset={true}
                >
                  Contact
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    </>
  );
}
