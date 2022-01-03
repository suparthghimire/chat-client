import { Navbar, Offcanvas, Nav } from "react-bootstrap";
export default function MobileNavigation() {
  return (
    <Navbar.Offcanvas>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Chatter</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav>
          <Nav.Link>Profile</Nav.Link>
          <Nav.Link>Log Out</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  );
}
