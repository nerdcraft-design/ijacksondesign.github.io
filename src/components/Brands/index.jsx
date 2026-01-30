import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function Brands() {
  return (
    <>
      <section className="py-3 py-lg-5 py-xxl-6 mb-5 mb-xxl-6">
        <Container fluid="xl">
          <h2 className="display-4 text-white text-center mb-5">
            Brands I've Worked With
          </h2>
          <Row className="row-cols-2 row-cols-md-3 row-cols-lg-6 g-5 g-lg-6 align-items-center">
            <Col>
              <Image
                src="/brand-logos/brand-logos-harley-davidson.svg"
                className="brand-logos"
              />
            </Col>
            <Col>
              <Image
                src="/brand-logos/brand-logos-mastercraft.svg"
                className="brand-logos"
              />
            </Col>
            <Col>
              <Image
                src="/brand-logos/brand-logos-marketingprofs.svg"
                className="brand-logos"
              />
            </Col>
            <Col>
              <Image
                src="/brand-logos/brand-logos-fgcu.svg"
                className="brand-logos"
              />
            </Col>
            <Col>
              <Image
                src="/brand-logos/brand-logos-parr-moto.svg"
                className="brand-logos"
              />
            </Col>
            <Col>
              <Image
                src="/brand-logos/brand-logos-fmbc.svg"
                className="brand-logos"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
