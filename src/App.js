import logo from "./logo.svg";
import "./App.css";

function App() {
  let date_ob = new Date();
  let dia_final = new Date();
  dia_final.setUTCFullYear(2023, 1, 15);

  var dias_restantes = dia_final.getTime() - date_ob.getTime();
  return (
    <div className="App">
      <header className="App-header">
        <p>Hoy es {date_ob.toLocaleDateString()}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Faltan {dias_restantes / (1000 * 3600 * 24)} dias para que vicky sea
          libre!
        </a>
      </header>
    </div>
  );
}

export default App;
