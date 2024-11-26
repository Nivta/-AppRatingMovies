import React from 'react';
import "../style/Header.css";
import { useNavigate } from 'react-router-dom';

export default function Header({ sortedMoviesByRating, setShowMovie}) {
const nav=useNavigate()
 

  return (
    <div className="Header">
      <div className="header">
        <h1>Best Movie</h1>
      </div>
      <div className="navbar">
        <button onClick={()=>{
          nav("/AddMovie")
        }}>add</button>
        <button  onClick={()=>{
          nav("/SearchMovie")
        }}>Search</button>
        <button onClick={()=>{
          nav("/DeletMovie")
        }}>delete</button>
        <button onClick={()=>{
          setShowMovie(sortedMoviesByRating[0])
          nav("/")
        }}>home</button>
      </div>
      <div className="black"></div> {/* פס שחור מתחת ל- */}
      <div className="movies-container">
        {sortedMoviesByRating.map((movie, index) => (
          <div onClick={()=>{
            setShowMovie(movie)
          }} key={index} className="movie-item" style={{ backgroundImage: `url(${movie.img})` }}>
            <div className="movie-name">{movie.name}</div>
          </div>
        ))}
        <div className="black"></div> 
      </div>
    </div>
  );
}

