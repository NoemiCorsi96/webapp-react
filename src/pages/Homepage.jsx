
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import MovieList from "../components/MovieList";
//const API_URL = import.meta.env.VITE_API_URL;
const API_URL = "http://localhost:3000/api/movies";
export default function Homepage() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    console.log("movies:", movies);
    useEffect(() => {
        axios.get(API_URL)
            .then(res => {
                console.log(res);
                setMovies(res.data.movie);

            })
            .catch(err => {
                console.log(err.message);
                setError(err.message)
            })
    }, [])



    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Benvenuti nella nostra Film Reviws App</h1>
                    <p className="col-md-8 fs-4">
                        La nostra applicazione offre una grande selezioni di film di tutti i generi, qui puoi vederli tutti!
                    </p>

                </div>
            </div>
            <MovieList movies={movies} />
        </>
    )
}