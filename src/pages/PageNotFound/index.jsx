import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <Container fluid="xxl" className="my-6 text-white text-center">
        <h1 className="mb-5">404 Page Not Found</h1>
        <Link to="/" className="btn btn-primary">
          Go Back
        </Link>
      </Container>
    </>
  );
}
