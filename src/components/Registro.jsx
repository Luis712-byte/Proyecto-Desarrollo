import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function RegistroForm({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isUserAlreadyRegistered, setIsUserAlreadyRegistered] = useState(false);

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
      alert("¡El usuario ha sido registrado exitosamente!");
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
    <div className="min-h-screen flex items-center justify-center">
      {isRegistered ? (
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">¡Registro exitoso!</h1>
          <p className="text-gray-700 mb-4">
            Ahora puedes iniciar sesión con tu correo electrónico y contraseña.
          </p>
          <Link to="/">
            <button className="bg-primary text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full mt-4">
              Ir al inicio de sesión
            </button>
          </Link>
        </div>
      ) : (
        <form
          className="bg-white shadow-md rounded px-8 py-8 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-semibold mb-4 text-center">Registro</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="nombre"
                  >
                    Nombre:
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="nombre"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Correo Electrónico:
                  </label>
                </td>
                <td>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Contraseña:
                  </label>
                </td>
                <td>
                  <input
                    type="password"
                    id="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type="submit"
            className="bg-primary text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full mt-4"
          >
            Registrarse
          </button>
          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        </form>
      )}
    </div>
  );
}

export default RegistroForm;
