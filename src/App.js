import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Weather defaultCity='Rome' />
        <footer>
          This project was coded by{" "}
          <a href='https://github.com/cmvce'>Coleene Acevedo</a> and is{" "}
          <a href='https://github.com/cmvce/another-weather-app'>
            open-sourced
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
