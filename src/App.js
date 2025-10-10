import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This weather app was created by{" "}
          <a
            href="https://github.com/GwenCodes"
            target="_blank"
            rel="noreferrer">
            Gwen
          </a>{" "}
          open sourced in <a href="https://github.com/GwenCodes">Github</a> and{" "}
          hosted in{" "}
          <a href="https://app.netlify.com/teams/gwencodes/projects">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
