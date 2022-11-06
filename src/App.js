// import logo from "./logo.svg";
import Feed from "./components/Feed";
import { useEffect, useState } from "react";
import API from "./api";

const api = new API();

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api
      .get("/movies")
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div className="App min-h-screen bg-slate-900">
      <Feed movies={movies} />
    </div>
  );
}

export default App;
