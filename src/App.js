import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          2020-01-13 배포 #8 - v2.0.0
          <br />
          환경: {process.env.REACT_APP_STAGE}
        </a>
        <hr />
        <Button />
      </header>
    </div>
  );
}

export default App;
