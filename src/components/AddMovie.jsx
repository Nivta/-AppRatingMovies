import React, { useState } from 'react'
import "../style/AddMovie.css";
export default function AddMovie({addMovie}) {
const [name, setName] = useState("")
const [img, setImg] = useState("");
const [description, setDescription] = useState("");
  
return (
    <div className="add-movie">
            <h1>Add Movie</h1>
        <div className="movie-form">
          <input
            type="text"
            placeholder="Movie Name"
            value={name}
            onInput={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={img}
            onInput={(e) => setImg(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onInput={(e) => setDescription(e.target.value)}
          />
          
          <button
          onClick={() => {
            const newMovie = {
              name: name,          // Movie name
              img: img,            // Image URL
              description: description, // Movie description
              ratingArr: [],       // Initialize with an empty array for ratings
              ratingAvg: 0         // Initialize with an average rating of 0
            };
            addMovie(newMovie)

            
          }}
        >
          Add Movie
        </button>
        </div>
      </div>
    );
  }

