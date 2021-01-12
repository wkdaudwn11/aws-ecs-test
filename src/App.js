import logo from "./logo.svg";
import "./App.css";

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
          2020-01-12 배포 테스트 #9
          <br />
          환경: {process.env.REACT_APP_STAGE}
        </a>
      </header>
    </div>
  );
}

export default App;
