import { useState, useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import "./App.css";
import { generatePassword } from "./components/genereatePassword.js";

function App() {
  const [generador, setGenerador] = useState("");
  const [length, setLength] = useState(8);
  const [condicion, setCondicion] = useState(true);
  const [items, setItems] = useState([0, 1, 2]);
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  const add = () => setItems([...items, items.length]);
  const handleDelete = () =>
    setItems((prevItems) => prevItems.slice(0, prevItems.length - 1));
    const handleSort = () => {
      setItems((prevItems) => [...prevItems].sort((a, b) => a - b));
    }
    const handleSortReverse = () => {
      setItems((prevItems) => [...prevItems].sort((a, b) => b - a));
    }

    const deleteClick = (e) => {
      setItems((prevItems) => prevItems.filter((item) => item != e))
    }

  useEffect(() => {
    setGenerador(generatePassword());
  }, []);

  const handleGenerador = () => {
    setGenerador(generatePassword(length));
  };

  const handleLength = (e) => {
    setLength(e.target.value);
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
              <input
                className="generador-pass"
                type="text"
                value={generador}
                readOnly
              />
              <div className="generador-again" onClick={handleGenerador}>
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div>
            <h2>Poder de una contraseña</h2>
          </div>
        </div>
        <ul ref={parent}>
          {items.map((item) => (
            <li onClick={() => deleteClick(item)} key={item}>{item}</li>
          ))}
        </ul>
        <button onClick={add}>Add number</button>
        <button
          onClick={() => {
            enableAnimations(!condicion);
            setCondicion(!condicion);
          }}
        >
          {condicion ? "Disable" : "Enable"}
        </button>
        <button onClick={handleDelete}>Delete number</button>
        <button onClick={handleSort}>Sort</button>
        <button onClick={handleSortReverse}>Sort Reverse</button>
      </main>
    </>
  );
}

export default App;
