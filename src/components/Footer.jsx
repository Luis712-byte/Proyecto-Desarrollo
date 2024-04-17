import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();

  const handleContacto = () => {
    navigate("/Contacto");
  };
  const handleBlog = () => {
    navigate("/Blog");
  };

  return (
    <footer className="bg-light text-dark py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold">ACERCA DE NOSOTROS</h4>
            <p>
              Tu tienda de ropa para estar siempre a la moda. Descubre las
              últimas tendencias y estilos en nuestra colección. Exprésate a
              través de la moda en FashionCode.
            </p>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold">ATENCIÓN AL CLIENTE</h4>
            <Nav.Link onClick={handleContacto}>CONTACTO</Nav.Link>
            <Nav.Link onClick={handleBlog}>BLOG</Nav.Link>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold">
              SIGUENOS EN NUESTRAS REDES SOCIALES
            </h4>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faXTwitter} size="2x" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faPinterest} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} FashionCode. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
