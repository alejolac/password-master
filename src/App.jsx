import { useState, useEffect } from "react";
import "./App.css";
import { generatePassword } from "./components/genereatePassword.js"

function App() {
  const [generador, setGenerador] = useState("");
  const [length, setLength] = useState(8)

  useEffect(() => {
    setGenerador(generatePassword());
  }, [])

  const handleGenerador = () => {
    setGenerador(generatePassword(length))
  }

  const handleLength = (e) => {
    setLength(e.target.value)
  }

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
              <div className="generador-length">
                <input type="number" value={length} onChange={handleLength}/>
              </div>
              <input type="text" value={generador} readOnly />
              <div onClick={handleGenerador}>
                <i className="fa-solid fa-plus"></i>
              </div>
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
