import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faUserPen,
  faUser,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "./Header";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Account = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    dirrecion: "",
    edad: "",
    apellido: "",
    email: "",
    codigoPostal: "",
  });

  const navigate = useNavigate();

  const handleMouseEnter = () => {
    //setShowIcon(true);
  };

  const handleMouseLeave = () => {
    setShowIcon(false);
  };

  useEffect(() => {
    const Datos = localStorage.getItem("userDataList");
    if (Datos) {
      const userDataFromStorage = JSON.parse(Datos)[0];
      setUserData(userDataFromStorage);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (!e.target.readOnly) {
      setUserData((prevUserData) => ({
        ...prevUserData,
        [name]: value,
      }));
    }
  };

  const guardarCambios = () => {
    const { dirrecion, apellido, edad, codigoPostal } = userData;
    if (
      dirrecion &&
      apellido &&
      edad &&
      codigoPostal &&
      dirrecion.trim() !== "" &&
      apellido.trim() !== "" &&
      edad.trim() !== "" &&
      codigoPostal.trim() !== ""
    ) {
      localStorage.setItem("userDataList", JSON.stringify([userData]));
      Swal.fire({
        title: "¡Tus cambios han sido guardados!",
        icon: "success",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, completa todos los campos antes de guardar los cambios.",
      });
    }
  };

  function Eliminar() {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("userDataList");
        setUserData({
          name: "",
          email: "",
          password: "",
        });
        Swal.fire({
          title: "¡Tu cuenta ha sido eliminada!",
          icon: "success",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });
      } else if (result.isDenied) {
        navigate("/Account");
      }
    });
  }

  let Perfil = () => {
    navigate("/Account");
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-md-3 d-none d-md-block">
            <div className="user-links">
              <ul className="EliminarCuenta">
                <h2>Mi cuenta</h2>
                <hr></hr>
                <li>
                  <FontAwesomeIcon icon={faUser} />
                  <span onClick={Perfil}>Mi Perfil</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faTrash} />
                  <span onClick={Eliminar} href="#">
                    Eliminar Cuenta
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="user-info-container">
              <div className="user-avatar" style={{ position: "relative" }}>
                <img
                  src="https://th.bing.com/th/id/R.baab394b13d90b82e910fe7daffe91d6?rik=j%2fgpEnKUbHUF4Q&riu=http%3a%2f%2fcdn.playbuzz.com%2fcdn%2f913253cd-5a02-4bf2-83e1-18ff2cc7340f%2fc56157d5-5d8e-4826-89f9-361412275c35.jpg&ehk=%2fLjgOG%2bOBkDVenK3gytA6rK4ZjpCTRXBnFQiOOjVHgc%3d&risl=&pid=ImgRaw&r=0"
                  alt="foto"
                  className={`img-fluid rounded-circle ${
                    showIcon ? "opaque" : ""
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
                {showIcon && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </div>
                )}
              </div>
              <div className="user-details-container">
                <div className="user-details-column">
                  <div className="user-details">
                    <p>
                      <span>Nombre: </span>
                      <input
                        type="text"
                        name="name"
                        value={userData.name}
                        readOnly
                        onChange={handleInputChange}
                      />
                    </p>
                    <p>
                      <span>Email: </span>
                      <input
                        type="email"
                        name="email"
                        value={userData.email}
                        readOnly
                        onChange={handleInputChange}
                      />
                    </p>
                    <p>
                      <span>Dirrecion: </span>
                      <input
                        type="text"
                        name="dirrecion"
                        value={userData.dirrecion}
                        onChange={handleInputChange}
                      />
                    </p>
                    <div className="button-group">
                      <button
                        className="btn btn-primary"
                        onClick={guardarCambios}
                      >
                        <FontAwesomeIcon icon={faUserPen} /> Guardar Cambios
                      </button>
                    </div>
                  </div>
                </div>
                <div className="user-details-column">
                  <div className="user-details">
                    <p>
                      <span>Apellido: </span>
                      <input
                        type="text"
                        name="apellido"
                        value={userData.apellido}
                        onChange={handleInputChange}
                      />
                    </p>
                    <p>
                      <span>Edad: </span>
                      <input
                        type="number"
                        name="edad"
                        value={userData.edad}
                        onChange={handleInputChange}
                      />
                    </p>
                    <p>
                      <span>C.Postal: </span>
                      <input
                        type="text"
                        name="codigoPostal"
                        value={userData.codigoPostal}
                        onChange={handleInputChange}
                      />
                    </p>
                    <div className="button-group">
                      <button className="btn btn-danger" onClick={Eliminar}>
                        <FontAwesomeIcon icon={faTrash} /> Borrar Cuenta
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
