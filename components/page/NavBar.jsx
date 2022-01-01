import { Nav, Navbar, Offcanvas, Container } from "react-bootstrap";
import UserInfo from "../partials/UserInfo";
export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand href="#home">
          <UserInfo
            user_name="Suparth Narayan Ghimire"
            user_img="https://source.unsplash.com/200x200"
            image_dim={50}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <div className="navbar-collapse collapse" id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>Profile</Nav.Link>
            <Nav.Link>Log Out</Nav.Link>
          </Nav>
        </div>
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
      </Container>
    </Navbar>
  );
}
