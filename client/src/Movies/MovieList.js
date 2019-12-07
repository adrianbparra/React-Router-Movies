import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard"

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);

  

  const saveMovie = (t) => {
    console.log(this)
    const addToSavedList = props.addToSavedList;
    addToSavedList(movies[1])
  }

  console.log(props.location.pathname)
  
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} saveMovie={saveMovie} location={props.location.pathname}/>
      ))}
    </div>
  );
}

// function MovieDetails({ movie }) {
//   const { title, director, metascore, stars } = movie;
//   return (
//     <div className= "movie-card">
//       <Link to={`/movies/${movie.id}`}>
//         <h2>{title}</h2>
//         <div className="movie-director">
//           Director: <em>{director}</em>
//         </div>
//         <div className="movie-metascore">
//           Metascore: <strong>{metascore}</strong>
//         </div>
//         <h3>Actors</h3>

//         {stars.map(star => (
//           <div key={star} className="movie-star">
//             {star}
//           </div>
//         ))}
//       </Link>
//     </div>
//   );
// }

export default MovieList;
