import React, { useState } from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
import { CartIcon } from "./Icons";
import { Link, useNavigate } from "react-router-dom";

function PaymentGateway() {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [submitForm, setSubmitForm] = useState(false);
  const [validationError, setValidationError] = useState("");

  const navigate = useNavigate();

  const handlePayment = () => {
    const isValid = validateCardData();
    if (isValid) {
      setSubmitForm(true);
      alert("Compra Exitosa");
      navigate("/");
    } else {
      setValidationError("Por favor ingrese datos válidos.");
    }
  };

  const validateCardData = () => {
    return (
      cardNumber.trim().length === 16 &&
      expirationDate.trim().length === 5 &&
      securityCode.trim().length === 3
    );
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/, "");
    if (value.length <= 16) {
      setCardNumber(value);
    }
  };

  const handleExpirationDateChange = (e) => {
    const value = e.target.value.replace(/\D/, "");
    if (value.length <= 5) {
      setExpirationDate(value);
    }
  };

  const handleSecurityCodeChange = (e) => {
    const value = e.target.value.replace(/\D/, "");
    if (value.length <= 3) {
      setSecurityCode(value);
    }
  };

  return (
    <>
      <div className="Title-container">
        <Link to="/Pago">
          <button>
            {" "}
            <CartIcon />
          </button>
        </Link>
      </div>
      <div>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <Container>
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <Col>
                  <h1>Pasarela de Pago</h1>
                </Col>
                <hr></hr>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-2 pb-3">Informacion de Pago</h4>
                          <Form>
                            <Form.Group>
                              <Form.Label></Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Numero de Tarjeta"
                                value={cardNumber}
                                maxLength={16}
                                onChange={handleCardNumberChange}
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label></Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="MM/YY"
                                value={expirationDate}
                                maxLength={5}
                                onChange={handleExpirationDateChange}
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label></Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Codigo de Seguridad"
                                value={securityCode}
                                maxLength={3}
                                onChange={handleSecurityCodeChange}
                              />
                            </Form.Group>
                          </Form>
                          <Button className="mt-4" onClick={handlePayment}>
                            Pay
                          </Button>
                          {submitForm ? (
                            <p className="exito">
                              Formulario enviado exitosamente
                            </p>
                          ) : (
                            validationError && (
                              <p className="error-message">{validationError}</p>
                            )
                          )}
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
    </>
  );
}

export default PaymentGateway;
