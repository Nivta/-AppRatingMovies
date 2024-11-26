
import React from 'react';
import "../style/Home.css";

export default function Home({ sortedMoviesByName, addRitingByMovie,showMovie,setShowMovie }) {

  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title"> movie is {showMovie.name}</h1>
        <img src={showMovie.img} alt="תמונה" className="home-image" />
        <p className="home-description">description: {showMovie.description}</p>
        <div className="home-rating">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              className={'rating-button'}
              onClick={() => addRitingByMovie(showMovie.name, value)}
            >
              {value}
            </button>
          ))}
        </div>
        <p className="home-rating-number">the rating is {showMovie.ratingAvg}</p>
      </div>
      
      <div className="home-card">
        <h2>Movies List</h2>
        <ul className="movies-list">
          {sortedMoviesByName.map(movie => (
            <li onClick={()=>
            {
              setShowMovie(movie)
            }} style={{ backgroundImage: `url(${movie.img})`, backgroundSize: 'cover', color: 'white' }} key={movie.name}>{movie.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}