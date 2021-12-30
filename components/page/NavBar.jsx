import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import UserInfo from "../partials/UserInfo";
export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <UserInfo
            user_name="Suparth Narayan Ghimire"
            user_img="https://source.unsplash.com/200x200"
            image_dim={50}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>Profile</Nav.Link>
            <Nav.Link>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
