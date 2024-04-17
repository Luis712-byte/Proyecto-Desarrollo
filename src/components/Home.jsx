import { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "./Header.jsx";
import { Cart } from "./Cart.jsx";
import Card from "../style/Cartas-home.jsx";
import { Footer } from "./Footer.jsx";
import SliderComponent from "../style/Slider.jsx";
import { Container } from "react-bootstrap";

const Home = () => {
  const h1Style = {
    textAlign: "center",
  };

  return (
    <div className="Home">
      <NavBar />
      <div className="Home-Content">
        <Container>
          <h1 style={h1Style}>NUEVA COLECCIÓN DE ROPA PARA MUJER</h1>
          <SliderComponent />
        </Container>
        <br></br>

        <div className="card-container">
          <Card
            className="card-align"
            imgSrc="https://th.bing.com/th/id/R.da099ad4135677e0f2a44c9616ebf9d2?rik=V7snFKU%2boqkOag&pid=ImgRaw&r=0"
            title="Mujer"
            paragraph=" Descubre una amplia gama de prendas diseñadas para realzar tu estilo y resaltar tu feminidad. Desde vestidos exquisitos hasta conjuntos casuales y accesorios encantadores."
            buttonLabel="Ver Catalogo"
          />

          <Card
            className="card-align"
            imgSrc="https://i.pinimg.com/originals/01/4e/a3/014ea3da98ba8335d7b594f7d5f7fbe1.jpg"
            title="Hombre"
            paragraph="Explora una colección de prendas diseñadas para hombres modernos y sofisticados. Desde trajes a medida hasta conjuntos informales y accesorios elegantes."
            buttonLabel="Ver Catalogo"
          />

          <Card
            className="card-align"
            imgSrc="https://th.bing.com/th/id/OIP.uH7tlT3vAfbw4lfYCIccOwHaJ4?pid=ImgDet&rs=1"
            title="Niño"
            paragraph="Desde ropa cómoda para el día a día hasta trajes festivos para ocasiones especiales, nuestra selección está diseñada pensando en la diversión y el confort de tus niños."
            buttonLabel="Ver Catalogo"
          />

          <Card
            className="card-align"
            imgSrc="https://th.bing.com/th/id/R.3d1685b60303c402417ea596ce141142?rik=eejtEQYmFSVyKQ&pid=ImgRaw&r=0"
            title="Acessorios"
            paragraph="Explora nuestra exclusiva colección de Accesorios de Ropa.Desde joyería y bufandas hasta bolsos y sombreros elegantes, estos accesorios son la clave realzar tu estilo único."
            buttonLabel="Ver Catalogo"
          />
        </div>

        <div className="Home-Promo bg-dark text-white">
        <h1>Compra en linea por catálogo.</h1>
        <h5>Obten un 25% por compras superiores a $300.000 | Acumula puntos y gana premios por tus ventas.</h5>
        </div>
        <br></br>
        <img
        alt=""
        src="https://carmel.com.co/wp-content/uploads/2023/10/CRML_4_HOTDAYS2_Desktop.jpg"
      />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
