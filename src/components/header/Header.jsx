import React, { useState, useEffect } from 'react';
import './header.css';
import requests from '../../api/requests';
import { Carousel } from 'react-bootstrap';

const Header = () => {
    const [movies, setMovies] = useState([]);
    const imgUrl = `https://image.tmdb.org/t/p/original`
    
    const fetchData = async () => {
        const request = await fetch(requests.fetchNetflixOriginals);
        if(request.status === 200){
            const moviess = await request.json();
            setMovies(moviess.results);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='header-wrapper'>
            <h1>Movie Trailers Online</h1>
            <Carousel className="carousel w-100">
                {movies.map((movie)=> 
                    <Carousel.Item className="carousel-item" key={movie.id}>
                        <div className="movie-info">
                            <h1>{movie.title || movie.name}</h1>
                            <p>{movie.overview}</p>
                        </div>
                        <center>
                            <img
                            className="image d-block"
                            src={`${imgUrl}${movie.poster_path}`}
                            alt="First slide"
                            />
                        </center>
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    )}

export default Header;
