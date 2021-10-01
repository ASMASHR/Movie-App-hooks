import './App.css';
import 'bootstrap';
import React, {useState} from'react'
import Navbar from './components/navbar';
import {myLists} from './components/MovieList'
import SearchBar from './components/SearchBar'
import AddingFilm  from './components/AddingFilm';
import MovieCard from './components/MovieCard'
import Footer from './components/Footer'
 
function App() {

  const [movies, setMovies] = useState(myLists)
  const [AddFilm, setAddFilm] = useState(false);
  // inputFilmName,inputRate for the searching bar  
  const [inputFilmName, setinputFilmName]=useState(" ");
  const [inputRate, setinputRate] = useState(0); 
  //updateList: to Add the movies to the movies list 
  const updateList=(newmovie)=>{setMovies(movies=>[...movies , newmovie])}
  // function tha oppen the modal Adding film
  const openModal = () => { setAddFilm(prev => !prev);};

  
  
   return (
    <div className="App">
      <Navbar/>
      <AddingFilm AddFilm={AddFilm} setAddFilm={setAddFilm} updateList={updateList} />  
      <SearchBar movies={movies} inputFilmName={inputFilmName}  inputRate={inputRate} setinputRate={setinputRate} setinputFilmName={setinputFilmName} />
      <MovieCard  movies ={movies} inputRate={inputRate} inputFilmName={inputFilmName} />
      <Footer/>
      </div>
  );
}

export default App;