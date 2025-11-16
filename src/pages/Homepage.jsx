import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
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
            <section className="mb-4">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {movies.map(movie => (
                            <div className="col" key={movie.id}>
                                <div className="card">
                                    <Link to={`/movies/${movie._id}`}>
                                        <img className="card-img-top" src={movie.image} alt={movie.title} />
                                    </Link>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {movie.title}
                                        </h5>
                                        <div className="my-2">
                                            {movie.genre}
                                        </div>
                                        <Link className="btn btn-dark" to={`/movies/${movie._id}`}></Link>

                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Link className="btn btn-dark mt-5">View Details</Link>
                    </div>
                </div>

            </section>
        </>
    )
}