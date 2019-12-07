import React from 'react';
import { Link } from "react-router-dom";

//do a find like the example on codesandbox


 
function MovieCard({ movie, saveMovie ,location}) {
  const { title, director, metascore, stars,id } = movie;

  console.log(location)
  

if(location){
  var savemoviebutton = null
} else {
    var savemoviebutton = <div className="save-button" onClick={saveMovie}>Save</div>
}
  

  return (
    <div className= "movie-card">
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
      {savemoviebutton}
      {/* <div className="save-button" onClick={saveMovie}>Save</div> */}
    </div>

  );
}

export default MovieCard;