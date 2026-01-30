import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SkillsScroller() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // checks if user has reduced motion turn on, if not, add scroller animations
    if (!window.matchMedia("(prefers-reduced-motion: reduce").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <>
      <section className="mb-5 mb-xxl-6">
        <Container fluid="xl">
          <Row>
            <Col className="scroller">
              <div className="scroller__inner">
                <div className="scroller__item">
                  Adobe Photoshop + Illustrator + InDesign + Premiere Pro +
                  After Effects
                </div>
                <div className="scroller__item">/</div>
                <div className="scroller__item">
                  HTML/CSS/JS + Git + React + Node.js
                </div>
                <div className="scroller__item">/</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
