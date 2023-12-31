import { useState, useEffect } from "react";
import "./App.css";
import { generatePassword } from "./components/genereatePassword.js";
import Button from "./button.jsx";
import Test from "./copyData.jsx";
import Modal from "./modal.jsx";

function App() {
  const [generador, setGenerador] = useState("");
  const [length, setLength] = useState(10);
  const [filters, setFilters] = useState({
    1: true,
    2: false,
    3: false,
  });
  const [mainPass, setMainPass] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setGenerador(generatePassword());
  }, []);

  const handleGenerador = () => {
    setGenerador(generatePassword(length, filters[1], filters[2], filters[3]));
  };

  const handleLength = (e) => {
    setLength(e.target.value);
  };

  const handleFilters = (type) => {
    setFilters((preFilters) => ({
      ...preFilters,
      [type]: !preFilters[type],
    }));
  };

  const handleCopy = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const addNewPassword = (name) => {
    navigator.clipboard.writeText(generador);
    const newPass = { name: name, password: generador };
    setMainPass((prevPass) => [...prevPass, newPass]);
    closeModal()
  };

  return (
    <>
      <main>
        <div>
          <h1>Password Master</h1>
        </div>
        <div>
          <div>
            <h2>Generador de Contraseña</h2>
            <div className="generador-input">
              <input
                className="generador-length"
                type="number"
                value={length}
                onChange={handleLength}
              />
              <div className="generador-copy">
                <input
                  className="generador-pass"
                  type="text"
                  value={generador}
                  readOnly
                />
                <i
                  onClick={() => handleCopy(generador)}
                  className="fa-regular fa-clipboard"
                ></i>
              </div>
              <div className="generador-again" onClick={handleGenerador}>
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div>
            <div className="generador-filtros">
              <h3>Filtros: </h3>
              <Button
                text={"Mayuscula"}
                icon={"fa-solid fa-up-long"}
                click={filters[1]}
                type={1}
                handleClickApp={handleFilters}
              />
              <Button
                text={"@ Especiales &"}
                click={filters[2]}
                type={2}
                handleClickApp={handleFilters}
              />
              <Button
                text={"Numeros"}
                icon={"fa-solid fa-arrow-up-1-9"}
                click={filters[3]}
                type={3}
                handleClickApp={handleFilters}
              />
            </div>
          </div>
          <div>
            <h2>Poder de una contraseña</h2>
            <Test passwords={mainPass} />
            <Modal
              password={generador}
              modalOpen={openModal}
              modalClose={closeModal}
              add={addNewPassword}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
