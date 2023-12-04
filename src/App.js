import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/header/header';
import Home from './pages/home/home';
import MovieList from './components/MovieList/movieList';
import Movie from './pages/home/movieDetails/movie';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path='movie/:id' element={<h1>{<Movie/>}</h1>}></Route>
            <Route path='movies/:type' element={<h1>{<MovieList />}</h1>}></Route>
            <Route path='/*' element={<h1>Error page</h1>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
