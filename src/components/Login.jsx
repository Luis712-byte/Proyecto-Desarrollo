import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegistroForm from "./Registro";
import { FaKey } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

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
    <>
      <div className="Title-container">
        <Link to="/*">
          <button>
            {" "}
            <FaHouse />{" "}
          </button>
        </Link>
      </div>
      <div className="background-image">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6">
              {isRegistering ? (
                <RegistroForm onRegister={handleLoginSuccess} />
              ) : (
                <div className="form-box">
                  <div className="form-top">
                    <div className="form-top-left">
                      <h3>Login to our site</h3>
                      <p>Enter email and password to log on:</p>
                    </div>
                    <div className="form-top-right">
                      <FaKey className="i" />
                    </div>
                  </div>
                  <div className="form-bottom">
                    <form
                      className={`bg-white shadow-md rounded px-8 py-8`}
                      onSubmit={handleSubmit}
                    >
                      <div className="form-group">
                        <label className="sr-only" htmlFor="form-username">
                          Username
                        </label>
                        <input
                          type="text"
                          value={emailOrId}
                          onChange={(e) => setEmailOrId(e.target.value)}
                          required
                          placeholder="tuemail@example.com"
                          className="form-username form-control"
                          id="form-username"
                        />
                      </div>
                      <div className="form-group">
                        <label className="sr-only" htmlFor="form-password">
                          Password
                        </label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          placeholder="Tu contraseña"
                          className="form-password form-control"
                          id="form-password"
                        />
                      </div>
                      <button type="submit" className="btn mt-2">
                        Sign in!
                      </button>
                      {error && (
                        <p className="text-red-500 text-center">{error}</p>
                      )}
                      <p className="text-center mt-2">
                        ¿No tienes cuenta?{" "}
                        <Link
                          onClick={toggleForm}
                          className="text-blue-500 hover:underline cursor-pointer"
                        >
                          Regístrate aquí
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
