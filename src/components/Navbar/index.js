import CartLink from "../../assets/images/icons/buying.png";
import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../config/firebase";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  const [user] = useAuthState(auth);
  return (
    <Navbar className={styles.bgColorNavbar} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          D Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link as={Link} to="/" active>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/product" active>
              Our Produts
            </Nav.Link>
            {user && (
              <Nav.Link as={Link} to="/cart" active>
                <img
                  src={CartLink}
                  alt="cart"
                  width="20"
                  height="20"
                  className="d-inline-block align-top"
                />
              </Nav.Link>
            )}
            {user ? (
              <Nav.Link as={Link} to="/#" onClick={logout} active>
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login" active>
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
