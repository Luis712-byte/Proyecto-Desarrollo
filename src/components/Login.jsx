import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegistroForm from "./Registro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function LoginForm() {
  const [emailOrId, setEmailOrId] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setEmailOrId("");
    setPassword("");
  }, []);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleLoginSuccess = (name) => {
    setUsername(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDataList = JSON.parse(localStorage.getItem("userDataList")) || [];
    const user = userDataList.find(
      (user) =>
        (user.email === emailOrId || user.id === emailOrId) &&
        user.password === password
    );

    if (user) {
      alert(`Bienvenido ${user.name}`);
      navigate("/");
      handleLoginSuccess(user);
      localStorage.setItem("loggedInUserEmail", user.email);
    } else {
      setError("Email/ID o contraseña incorrectos.");
    }
  };

  return (
    <div>
      <div className="Title-container">
        <Link to="/*">
          <button>
            {" "}
            <FontAwesomeIcon icon={faArrowLeft} />{" "}
          </button>
        </Link>

        <div className="element2">
          <h1>Formulario De Ingreso</h1>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        {isRegistering ? (
          <RegistroForm onRegister={handleLoginSuccess} />
        ) : (
          <form
            className={`bg-white shadow-md rounded px-8 py-8`}
            onSubmit={handleSubmit}
          >
            <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email o ID:
              </label>
              <input
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={emailOrId}
                onChange={(e) => setEmailOrId(e.target.value)}
                required
                placeholder="tuemail@example.com o ID"
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
                onChange={(e) => setPassword(e.target.value)}
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
            {error && <p className="text-red-500 text-center">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
