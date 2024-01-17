import { useState } from "react";

function App() {


  const [value, setValue] = useState(0);
  
  const [deMoeda, setDeMoeda] = useState("BRL");

  const [paraMoeda, setParaMoeda] = useState("USD");

  const [resultado, setResultado] = useState(0);

  function converterMoeda() {
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${value}&from=${deMoeda}&to=${paraMoeda}`)
    .then(resp => resp.json())
    .then((data) => setResultado(data.rates[paraMoeda]));
  }

  return (
    <div className="box">
      <h1>Conversor de Moeda</h1>
      <div className="box-input">
        <label>{deMoeda} </label>
        <input 
        type="number" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="box-select">
        <select value={deMoeda} onChange={(e) => setDeMoeda(e.target.value)}>
          <option value="USD">Dolar</option>
          <option value="BRL">Reais</option>
          <option value="CNY">Yuan</option>
        </select>
        <select value={paraMoeda} onChange={(e) => setParaMoeda(e.target.value)}>
          <option value="USD">Dolar</option>
          <option value="BRL">Reais</option>
          <option value="CNY">Yuan</option>
        </select>
      </div>
      <div className="box-result">
        <button onClick={() => converterMoeda()}>Converter</button>
        <p>{paraMoeda} {resultado.toFixed(2)}</p>     
      </div>
    </div>
  );
}

export default App;
