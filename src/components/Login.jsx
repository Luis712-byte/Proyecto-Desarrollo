import React, { useState } from "react";
import { Link } from "react-router-dom";
import Registro from "./Registro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function LoginForm() {
  const [email, setEmail] = useState(""); // Usar estado para email
  const [password, setPassword] = useState(""); // Usar estado para password
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div>
      <div className="Title-container">
        <Link to="/*">
          <button> <FontAwesomeIcon icon={faArrowLeft} /> </button>
        </Link>

        <div className="element2">
          <h1>Formulario De Ingreso</h1>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          className={`bg-white shadow-md rounded px-8 py-8 ${
            isRegistering ? "hidden" : ""
          }`}
        >
          <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Actualizar email con el cambio
              required
              placeholder="tuemail@example.com"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Contraseña:
            </label>
            <input
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Actualizar password con el cambio
              required
              placeholder="Tu contraseña"
            />
          </div>
          <button
            className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Iniciar Sesión
          </button>
          <p className="text-center mt-4">
            ¿No tienes cuenta?{" "}
            <Link
              onClick={toggleForm}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Regístrate aquí
            </Link>
          </p>
        </form>
        {isRegistering && <Registro />}
      </div>
    </div>
  );
}

export default LoginForm;
