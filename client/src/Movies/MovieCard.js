import React from 'react';
import { Link } from "react-router-dom";

//do a find like the example on codesandbox


 
function MovieCard({ movie, saveMovie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <div className= "movie-card">
      <Link to={`/movies/${movie.id}`}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </Link>
      <div className="save-button" onClick={saveMovie}>Save</div>
    </div>

  );
}

export default MovieCard;