import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import "./NavBar.css"
import { useCollection } from '../../hooks/useCollection';
import ModalComponent from '../ModalComponent/ModalComponent';


const NavBar = () => {

  const {data, loading} = useCollection("categories");

  return (
    <Navbar expand="lg" bg="dark" variant='dark' className="container">
      <Container bg="dark">
        <Navbar.Brand > <Link to="/" className="home">Zeus</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          {loading ? null : (
              <NavDropdown title="Categorias" id="basic-nav-dropdown" className="navDropdown">
                {data[0].categories.map((category, index) => {
                  return (
                    <NavDropdown.Item key={index}>
                      <Link to={`/category/${category}`} className="NavDropdownLink">{category}</Link>
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            )}
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
        <ModalComponent/>

      </Container>
    </Navbar>
  );
}

export default NavBar;

