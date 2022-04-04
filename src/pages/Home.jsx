import React from 'react'
import requests from '../api/requests'
import Row from '../components/row/Row'
import './pages.css'

function Home() {
    return (
        <div className='home-wrapper container'>
            <Row title="Popular" fetchUrl={requests.fetchPopularMovies}></Row>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
            <Row title="Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
        </div>
    )
}

export default Home;
