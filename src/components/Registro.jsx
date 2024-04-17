import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { FaPencilAlt } from "react-icons/fa";

function RegistroForm({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isUserAlreadyRegistered, setIsUserAlreadyRegistered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userDataList = JSON.parse(localStorage.getItem("userDataList"));
    if (userDataList) {
      setIsUserAlreadyRegistered(true);
      console.log(userDataList);
    }
  }, []);

  const checkUserAlreadyRegistered = () => {
    const userDataList = JSON.parse(localStorage.getItem("userDataList")) || [];
    const userExists = userDataList.some(
      (user) => user.email === email || user.id === email
    );
    setIsUserAlreadyRegistered(userExists);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkUserAlreadyRegistered();
    if (isUserAlreadyRegistered) {
      setError("¡El email ya está registrado!");
      return;
    } else {
      const userDataList =
        JSON.parse(localStorage.getItem("userDataList")) || [];
      const newUser = { id: uuidv4(), name, email, password };
      const updatedUserDataList = [...userDataList, newUser];
      localStorage.setItem("userDataList", JSON.stringify(updatedUserDataList));
      onRegister(name);
      Swal.fire({
        title: "¡El usuario ha sido registrado exitosamente!",
        icon: "success",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
      Clear();
      setIsRegistered(true);
    }
  };

  function Clear() {
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12">
          {isRegistered ? (
            <div className="text-registro">
              <h1 className="text-2xl font-semibold mb-4">
                ¡Registro exitoso!
              </h1>
              <p className="text-gray-700 mb-4">
                Ahora puedes iniciar sesión con tu correo electrónico y
                contraseña.
              </p>

              <Link to="/">
                <button className="bg-primary text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full mt-4">
                  Ir al inicio de sesión
                </button>
              </Link>
            </div>
          ) : (
            <div className="form-box">
              <div className="form-top">
                <div className="form-top-left">
                  <h3>Sign up now</h3>
                  <p>Fill in the form below to get instant access:</p>
                </div>
                <div className="form-top-right">
                  <FaPencilAlt className="fa fa-pencil" />
                </div>
              </div>
              <div className="form-bottom">
                <form
                  className="bg-white shadow-md rounded px-8 py-8 w-full max-w-md"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <label className="sr-only" htmlFor="form-first-name">
                      First name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="First name..."
                      className="form-first-name form-control"
                      id="form-first-name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="sr-only" htmlFor="form-last-name">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Email..."
                      className="form-last-name form-control"
                      id="form-last-name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="sr-only" htmlFor="form-email">
                      Password
                    </label>
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Password..."
                      className="form-email form-control"
                      id="form-email"
                    />
                  </div>
                  <button type="submit" className="btn mt-2">
                    Sign me up!
                  </button>
                  <p className="text-center mt-2">
                    ¿Ya tienes una cuenta? <Link to="/">Logueate aquí</Link>
                  </p>
                  {error && (
                    <p className="mt-2 text-red-500 text-center">{error}</p>
                  )}
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RegistroForm;
