import React, { useEffect, useState} from "react";
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import './row.css';

const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    // const url = 'https://api.themoviedb.org/3/movie/popular?api_key=49e800de027955c63868eb9e24ba6ba9'
    const imgUrl = `https://image.tmdb.org/t/p/original`
    
    const fetchData = async () => {
        const request = await fetch(fetchUrl);
        if(request.status === 200){
            const movies = await request.json();
            setMovies(movies.results);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleClick = (movie) => {
        if (trailerUrl) {
          setTrailerUrl("");
        } else {
          movieTrailer(movie?.title || "")
            .then((url) => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get("v"));
            })
            .catch(() => alert('Movie has no Trailer'));
        }
      };

      const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
      };

    return (
        <div className="row">
            <h1 className="row-popular title">{title}</h1>
            <div className="row-posters"> 
                {movies.map((movie) => 
                <div className="item" key={movie.id}>
                  <img className="row-img" src={`${imgUrl}${movie.poster_path}`} alt={movie.title} />
                  <div className="item__overlay" onClick={()=> handleClick(movie)}>
                    <h3 id="movie-title" aria-hidden="true">{movie.title || movie.name}</h3>
                    <div className="item__body">
                      <p>Popularity : {movie.popularity}</p>
                      <p>Average votes : {movie.vote_average}</p>
                      <p>Release Date : {movie.release_date || movie.first_air_date}</p>
                    </div>
                  </div>
                </div>
                )}
            </div>
            {trailerUrl && <YouTube className="ytvideo" videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;