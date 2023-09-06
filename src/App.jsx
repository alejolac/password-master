import { useState, useEffect } from "react";
//import { useAutoAnimate } from "@formkit/auto-animate/react";
import "./App.css";
import { generatePassword } from "./components/genereatePassword.js";
import Button from "./button.jsx";

function App() {
  const [generador, setGenerador] = useState("");
  const [length, setLength] = useState(8);
  const [filters, setFilters] = useState({
    1: true,
    2: false,
    3: false,
  });
  //const [items, setItems] = useState([0, 1, 2]);
  //const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

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
                  ref={parent}
                  className="generador-pass"
                  type="text"
                  value={generador}
                  readOnly
                />
                <i onClick={() => navigator.clipboard.writeText(generador)} className="fa-regular fa-clipboard"></i>
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
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
