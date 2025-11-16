import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
export default function MovieList({ movies }) {
    return (
        <section className="mb-4">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {movies.map(movie => (

                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>

            </div>

        </section>
    )

}