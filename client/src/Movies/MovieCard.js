import React from 'react';
import { Link } from "react-router-dom";

//do a find like the example on codesandbox


 
function MovieCard({ movie, saveMovie}) {
  const { title, director, metascore, stars,id } = movie;
  
  return (
    <div className= "movie-card" key={id}>
      <Link to={`/movies/${id}`}>
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
      <div className="save-button" onClick={()=>{saveMovie(movie)}}>Save</div>
    </div>

  );
}

export default MovieCard;