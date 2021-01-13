import logo from "./logo.svg";
import "./App.css";
import Work01 from "./components/work/Work01";
import Work02 from "./components/work/Work02";
import Work03 from "./components/work/Work03";
import Work04 from "./components/work/Work04";
import Work05 from "./components/work/Work05";

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
          2020-01-13 배포 #4 - v1.3.0
          <br />
          환경: {process.env.REACT_APP_STAGE}
        </a>
        <hr />
        <Work01 />
        <Work02 />
        <Work03 />
        <Work04 />
        <Work05 />
      </header>
    </div>
  );
}

export default App;
