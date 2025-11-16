import { Link } from "react-router-dom";
export default function MovieCard({ movie }) {
    return (
        <div className="col">
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
                    <Link className="btn btn-dark" to={`/movies/${movie.id}`}>Clicca per dettagli</Link>

                </div>

            </div>
        </div>
    )
}