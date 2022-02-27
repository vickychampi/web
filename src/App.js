import logo from "./logo.svg";
import "./App.css";

function ajax_get(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log("responseText:" + xmlhttp.responseText);
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function get_image() {
  ajax_get(
    "https://api.thecatapi.com/v1/images/search?size=full",
    function (data) {
      var html = '<img style="width:500px" src="' + data[0]["url"] + '">';
      document.getElementById("image").innerHTML = html;
    }
  );
}

get_image();

function App() {
  let date_ob = new Date();
  let dia_final = new Date();
  dia_final.setUTCFullYear(2023, 1, 15);

  var dias_restantes = dia_final.getTime() - date_ob.getTime();

  const button = {
    color: "white",
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Hoy es {date_ob.toLocaleDateString()}</p>
        <a href="https://app.osmosis.zone/pools" style={button}>
          Osmosis me va a hacer millonaria!
        </a>
        <p>
          Faltan <strong>{dias_restantes / (1000 * 3600 * 24)}</strong> dias
          para que Vicky sea libre!
        </p>
        <button onClick={() => get_image()}>Mostrame otro gato!</button>
        <div id="image"></div>
      </header>
    </div>
  );
}

export default App;
