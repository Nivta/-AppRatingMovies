import React, { useState } from 'react'
import "../style/deleteMovie.css";
export default function DeletMovie({removeMovieByName}) {
    const [movieToDelete, setMovieToDelete] = useState('');

    return (
      <div className="delete-movie-container">
        <h2>Delete Movie</h2>
        <input
          type="text"
          placeholder="Enter movie title"
          value={movieToDelete}
          onChange={(e) => setMovieToDelete(e.target.value)}
          className="delete-movie-input" // Add the CSS class
        />
        <button
          onClick={() => {
            alert(`Deleting movie: ${movieToDelete}`);
            removeMovieByName(movieToDelete);
            setMovieToDelete(''); // לנקות את השדה לאחר המחיקה
          }}
          className="delete-movie-button" // Add the CSS class
        >
          Delete
        </button>
      </div>
    );
}