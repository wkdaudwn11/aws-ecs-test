import logo from "./logo.svg";
import "./App.css";
import Work01 from "./components/work/Work01";
import Work02 from "./components/work/Work02";
import Work03 from "./components/work/Work03";

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
          2020-01-13 배포 #1
          <br />
          환경: {process.env.REACT_APP_STAGE}
        </a>
        <hr />
        <Work01 />
        <Work02 />
        <Work03 />
      </header>
    </div>
  );
}

export default App;
