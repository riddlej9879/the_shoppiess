import "./App.css";
import SimpleMenu from "./components/navbar";
import MovieForm from "./components/movieForm";

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <SimpleMenu />
      </div>
      <header className="App-header">
        <h1>Welcome to the The Shoppies!</h1>
        <p>Search for your favorite movie or TV show to learn more about it.</p>
        <p>Please select 5 movies or TV shows for a Shoppies nomination!!!</p>
      </header>
      <MovieForm />
    </div>
  );
}

export default App;
