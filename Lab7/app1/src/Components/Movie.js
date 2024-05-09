import React from "react";
import "./Movie.css";

const ImageURL = 'https://image.tmdb.org/t/p/w500/';
const unavailableimage = 'https://i.imgur.com/b8D5YCz.png';

function Movie({poster_path,title,overview,vote_average})
{
    let imageURLFinal;

    
    if (poster_path) {
        imageURLFinal = ImageURL + poster_path;
    } else {
        imageURLFinal = unavailableimage;
    }
    let scoreColor = '';
    if (vote_average > 7) {
        scoreColor = 'green';
    } else if (vote_average <= 7 && vote_average >= 5) {
        scoreColor = 'yellow';
    } else {
        scoreColor = 'red';
    }
    return(
<div className="movie">
    <img src={imageURLFinal}alt={title}></img>
    <div className="movie-info">
        <h3>{title}</h3>
        <span className={`vote-average ${scoreColor}`}>{vote_average}</span>
    </div>
    <div className="movie-overview">
        <h2>Overview:</h2>
        <p>{overview}</p>
    </div>
</div>

    );
}



export default Movie;