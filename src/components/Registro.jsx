import React, { useState } from 'react';

function RegistroForm() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white shadow-md rounded px-8 py-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">Registro</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                 Nombre:
                </label>
              </td>
              <td>
                <input
                 type="text"
                 id="nombre"
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 value={nombre}
                 onChange={(e) => setNombre(e.target.value)}
                 required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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
      </form>
    </div>
  );
}

export default RegistroForm;
