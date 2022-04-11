import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { ActionEdita, editTextBoton  } from "./Redux/Actions/Actions";

function App() {
  
  const dispatch = useDispatch();
  const texto = useSelector((state) => state.texto);
  const boton= useSelector((state) => state.boton);

  function handleEdita() {
      dispatch(ActionEdita ("tssssssssssssssk"));
      dispatch(editTextBoton ("TEXTO DEL BOTON OK"));
     
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. {texto}
        </p>
        <button onClick={handleEdita}>Llamar texto global  {boton}</button> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
