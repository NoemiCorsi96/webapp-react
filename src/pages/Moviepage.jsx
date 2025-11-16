import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewsList from "../components/ReviewsList";
const API_URL = "http://localhost:3000/api/movies";
export default function Moviepage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/${id}`)
            .then(res => {
                console.log(res);
                setMovie(res.data);
            })
            .catch(err => {
                console.log(err);
                setError(err.message)
            })
    }, [])

    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5 d-flex gap-4">
                    <div className="cover col-12 col-sm-5 col-md-4 ">

                        <img className="img-fluid" src={movie?.image} alt={movie?.title} />
                    </div>
                    <div className="details">
                        <h1 className="display-5 fw-bold">{movie?.title}</h1>
                        <div className="my-2">{movie?.genre}</div>

                        <p className="lead">
                            {movie?.abstract}
                        </p>
                    </div>
                </div>
            </div>



            <section className="mb-4">
                <div className="container">
                    <h3>Leave your Review</h3>
                    <form >
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input name="name" type="text" className="form-control" id="name" placeholder="anonymous" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="review" className="form-label">Your Review</label>
                            <textarea name="review" className="form-control" id="review" rows="3" ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="vote" className="form-label">Your Rating</label>
                            <select name="vote" className="form-select" id="vote" >
                                <option value="1">1 - Poor</option>
                                <option value="2">2 - Fair</option>
                                <option value="3">3 - Good</option>
                                <option value="4">4 - Very Good</option>
                                <option value="5">5 - Excellent</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-dark">Submit Review</button>

                    </form>
                </div>
            </section>

            <ReviewsList reviews={movie?.reviews || []} />

        </>
    )
}