import { React } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export function NavBar() {
  const navigate = useNavigate();

  const handle = () => {
    navigate("*");
  };
  const handleLogin = () => {
    navigate("/Login");
  };
  const handleProductos = () => {
    navigate("/Producto");
  };
  const handleCarrito = () => {
    navigate("/Carrito");
  };

  return (
    <div className="header">
      <div className="header-part1">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <p className="m-0">Welcome to FashionCode</p>
            <Nav className="me-auto"></Nav>
            <Nav>
              <FontAwesomeIcon
                icon={faUser}
                onClick={handleLogin}
                style={{
                  fontSize: "20px",
                  padding: "0 20px",
                  cursor: "pointer",
                }}
              />
            </Nav>
            <div className="responsive-div">
              <h5>
                ¡Hola! <br></br> Inicia sesión o regístrate
              </h5>
            </div>
          </Container>
        </Navbar>
      </div>
      <div className="header-part2">
        <Navbar bg="white" variant="white" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://th.bing.com/th/id/OIP.9nB7zDTSjd36vcaisOYNlQHaFI?w=255&h=180&c=7&r=0&o=5&pid=1.7"
                width="120"
                height="auto"
                className="d-inline-block align-top"
                onClick={handle}
              />
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link onClick={handleProductos}>CATEGORIAS </Nav.Link>
            </Nav>
            <FontAwesomeIcon
              icon={faCartShopping}
              onClick={handleCarrito}
              className="cart-icon bg-dark"
              style={{
                fontSize: "24px",
                borderRadius: "50px",
                color:"#EEE",
                padding:"5px",
                cursor: "pointer",
              }}
            />
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
export default NavBar;
