import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Home from './components/Home';
import AddMovie from './components/AddMovie';
import DeletMovie from './components/deletMovie';
import SearchMovie from './components/SearchMovie';
export default function App() {
  const [movies,setMovies]=useState([{name:"Naruto",img:"/assets/naruto.jpg",description:"Naruto Uzumaki, a young ninja with a fiery personality and an unrelenting determination to become the strongest ninja, or Hokage",ratingArr:[5,5,5,5],ratingAvg:5},
    {name:"onePiece",img:"/assets/onePiece.jpg",description:"It follows Monkey D. Luffy and his pirate crew, the Straw Hat Pirates, as they sail across a fantastical world in search of the legendary treasure known as the 'One Piece'",ratingArr:[4,4,4,4],ratingAvg:4},
    {name:"B",img:"/assets/B.png",description:"very good movie",ratingArr:[3,3,3,3],ratingAvg:3}])
    const sortedMoviesByRating = [...movies].sort((a, b) => b.ratingAvg - a.ratingAvg);
  const [showMovie, setShowMovie] = useState(sortedMoviesByRating[0]);
    const sortedMoviesByName = [...movies].sort((a, b) => a.name - b.name)
    function addMovie(movie) 
    {
      const moviesCopy = structuredClone(movies);
      moviesCopy.push(movie);
      setMovies(moviesCopy);
    }
    function theBestMovie()
    {
      return sortedMoviesByRating[0];
    }
    function findMovie(nameMovie)
    {
      const movie = movies.find((movie) => movie.name === nameMovie);
      return movie;
    }
    function addRitingByMovie(nameMovie,riting)
    {
      
      const moviesCopy = structuredClone(movies);
      const movieToEdit=moviesCopy.find((movie)=>movie.name === nameMovie)
      movieToEdit.ratingArr.push(riting)
      const sum = movieToEdit.ratingArr.reduce((acc, rating) => acc + rating, 0)
       movieToEdit.ratingAvg=sum/movieToEdit.ratingArr.length
      setMovies(moviesCopy)
    }
    function removeMovieByName(nameMovieToRemove)
    {
      const moviesCopy = structuredClone(movies);
      const filterMovie=moviesCopy.filter(movie=>movie.name!==nameMovieToRemove)
      setMovies(filterMovie);
    }
    
function searchMovieByName(movieName){
    
  const moviesCopy= structuredClone(movies)
 const movieFilter= moviesCopy.filter((movie)=>{
    const checkMovie =movie.name.includes(movieName)
    return checkMovie
  })
  return movieFilter;
}
  return (
    <BrowserRouter>
      <Header sortedMoviesByRating={sortedMoviesByRating}setShowMovie={setShowMovie}></Header>
      <Routes>
      <Route path="/" element={<Home sortedMoviesByName={sortedMoviesByName}addRitingByMovie={addRitingByMovie} showMovie={showMovie} setShowMovie={setShowMovie} />} />
      <Route path="/AddMovie" element={<AddMovie addMovie={addMovie} />}/> 
      <Route path="/DeletMovie" element={<DeletMovie removeMovieByName={removeMovieByName} />}/>
      <Route path="/SearchMovie" element={<SearchMovie searchMovieByName={searchMovieByName}addRitingByMovie={addRitingByMovie} />}/>
      </Routes>
    </BrowserRouter>  
  )
}