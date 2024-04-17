import React, { useState } from "react";
import { Container, Col, Form, Button } from "react-bootstrap";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ContactInformation = () => {
  const { cart } = useCart();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [submitForm, setSubmitForm] = useState(false);

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const navigate = useNavigate();

  const handlePayment = () => {
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      address.trim() === "" ||
      city.trim() === "" ||
      region.trim() === "" ||
      postalCode.trim() === "" ||
      country.trim() === ""
    ) {
      alert("Digite todos los campos");
    } else {
      setSubmitForm(true);
      Swal.fire({
        title: "Informacion Guardada",
        icon: "success",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/pay");
        }
      });
    }
  };

  return (
    <div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Container>
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <Col>
                <h1>Detalles de la Compra</h1>
                <ul>
                  {cart.map((product) => (
                    <li key={product.id}>
                      {product.title} - ${product.price} x {product.quantity}
                    </li>
                  ))}
                </ul>
                <p>Total: ${total}</p>
              </Col>

              <hr></hr>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-2 pb-3">Informacion de contacto</h4>
                        <Form>
                          <Form.Group>
                            <Form.Label></Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Nombre"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label></Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Apellido"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label></Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Dirrecion"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label></Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Ciudad"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label></Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Region"
                              value={region}
                              onChange={(e) => setRegion(e.target.value)}
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label></Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Codigo Postal"
                              value={postalCode}
                              onChange={(e) => setPostalCode(e.target.value)}
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label></Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Pais"
                              value={country}
                              onChange={(e) => setCountry(e.target.value)}
                            />
                          </Form.Group>
                        </Form>
                        <Button className="mt-3" onClick={handlePayment}>
                          Confirmar Informacion
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactInformation;
