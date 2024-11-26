// import React, { useState } from 'react';
// import "../style/SearchMovie.css";
// import { useNavigate } from 'react-router-dom';

// export default function SearchMovie({ searchMovieByName }) {
//   const [nameMovie, setNameMovie] = useState('');
//   const [filterMovies, setFilterMovies] = useState([]);
//   const nav=useNavigate()

//   const handleSearch = () => {
//     if (nameMovie) {
//       const filter = searchMovieByName(nameMovie);
//       setFilterMovies(filter);
//     } else {
//       setFilterMovies([]);
//     }
//   };

//   return (
//     <div className="search-movie-container">
//       <h1>חפש סרטים</h1>
//       <div className="search-bar">
//         <input
//           type="text"
//           value={nameMovie}
//           onInput={(e) => setNameMovie(e.target.value)} // פונקציה אנונימית
//           placeholder="הקלד שם סרט"
//           className="search-input"
//         />
//         <button onClick={() => handleSearch()} className="search-button">חפש</button> {/* פונקציה אנונימית */}
//       </div>
//       <ul className="movies-list">
//         {filterMovies.length > 0 ? (
//           filterMovies.map((movie) => (
//             <li 
//               key={movie.id} 
//               className="movie-item movie-item-background" 
//               style={{ backgroundImage: `url(${movie.img})`, backgroundSize: 'cover', color: 'white' }}
//               onClick={() => {
               
//                 nav("/movie/"+movie.name)
//                 // הוסיפו כאן את הפעולה שתרצו לבצע בלחיצה
//               }}
//             >
//               {movie.name}
//             </li>
//           ))
//         ) : (
//           <li className="no-results">לא נמצאו תוצאות</li>
//         )}
//       </ul>
//     </div>
//   );
// };
// import React, { useState } from 'react';
// import "../style/SearchMovie.css";

// export default function SearchMovie({ searchMovieByName,addRitingByMovie }) {
//   const [nameMovie, setNameMovie] = useState('');
//   const [filterMovies, setFilterMovies] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState(null); // משתנה לשמירת הסרט הנבחר
  

//   const handleSearch = () => {
//     if (nameMovie) {
//       const filter = searchMovieByName(nameMovie);
//       setFilterMovies(filter);
//     } else {
//       setFilterMovies([]);
//     }
//   };

//   return (
//     <div className="search-movie-container">
//       <div className="search-bar">
//         <h1>חפש סרטים</h1>
//         <input
//           type="text"
//           value={nameMovie}
//           onInput={(e) => setNameMovie(e.target.value)}
//           placeholder="הקלד שם סרט"
//           className="search-input"
//         />
//         <button onClick={handleSearch} className="search-button">חפש</button>
//       </div>
      
//       <div className="results-container">
//         <ul className="movies-list">
//           {filterMovies.length > 0 ? (
//             filterMovies.map((movie) => (
//               <li 
//                 key={movie.id} 
//                 className="movie-item movie-item-background" 
//                 style={{ backgroundImage: `url(${movie.img})`, backgroundSize: 'cover', color: 'white' }}
//                 onClick={() => {
//                   setSelectedMovie(movie); // עדכון הסרט הנבחר
//                 }}
//               >
//                 {movie.name}
//               </li>
//             ))
//           ) : (
//             <li className="no-results">לא נמצאו תוצאות</li>
//           )}
//         </ul>

//         <div className="selected-movie">
//           {selectedMovie ? (
//             <>
//               <h2>{selectedMovie.name}</h2>
//               <img src={selectedMovie.img} alt={selectedMovie.name} />
//               <p>{selectedMovie.description}</p>
//               <div className="home-rating">
//           {[1, 2, 3, 4, 5].map((value) => (
//             <button
//               key={value}
//               className={'rating-button'}
//               onClick={() => addRitingByMovie(selectedMovie.name, value)}
//             >
//               {value}
//             </button>
//           ))}
//         </div>
//         <p className="home-rating-number">the rating is {selectedMovie.ratingAvg}</p>
//             </>
//           ) : (
//             <p>בחר סרט כדי לראות פרטים</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState } from 'react';
import "../style/SearchMovie.css";

export default function SearchMovie({ searchMovieByName, addRitingByMovie }) {
  const [nameMovie, setNameMovie] = useState('');
  const [filterMovies, setFilterMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = () => {
    if (nameMovie) {
      const filter = searchMovieByName(nameMovie);
      setFilterMovies(filter);
    } else {
      setFilterMovies([]);
    }
  };

  return (
    <div className="search-movie-container">
      <div className="results-container">
        <ul className="movies-list">
          {filterMovies.length > 0 ? (
            filterMovies.map((movie) => (
              <li 
                key={movie.id} 
                className="movie-item movie-item-background" 
                style={{ backgroundImage: `url(${movie.img})`, backgroundSize: 'cover', color: 'white' }}
                onClick={() => setSelectedMovie(movie)}
              >
                {movie.name}
              </li>
            ))
          ) : (
            <li className="no-results">No results found</li>
          )}
        </ul>

        <div className="selected-movie">
          {selectedMovie ? (
            <>
              <h2>{selectedMovie.name}</h2>
              <img src={selectedMovie.img} alt={selectedMovie.name} />
              <p>{selectedMovie.description}</p>
              <div className="search-rating">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    className='rating-button'
                    onClick={() => addRitingByMovie(selectedMovie.name, value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
              <p className="search-rating-number">the rating is{selectedMovie.ratingAvg}</p>
            </>
          ) : (
            <p>Select a movie to see details</p>
          )}
        </div>
      </div>

      <div className="search-bar">
        <h1>Search movies</h1>
        <input
          type="text"
          value={nameMovie}
          onInput={(e) => setNameMovie(e.target.value)}
          placeholder="enter movie name"
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">search</button>
      </div>
    </div>
  );
}