import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hoşgeldin React Dünyasına!</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Yeni eklenen deneme buttonu */}
        <button className="fancy-button" onClick={() => alert("React çok eğlenceli! 🎉")}>
          Tıkla Beni!
        </button>
      </header>
    </div>
  );
}

export default App;