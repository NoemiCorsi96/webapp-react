import { useParams } from "react-router-dom";
export default function Moviepage() {
    const { id } = useParams()
    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5 d-flex gap-4">
                    <div className="cover col-12 col-sm-5 col-md-4 ">

                        <img className="img-fluid" src="inception.png" alt="inception" />
                    </div>
                    <div className="details">
                        <h1 className="display-5 fw-bold">Inception</h1>
                        <div className="my-2">Genere:</div>

                        <p className="lead">
                            Questo è un film che parla di blablabla..
                        </p>
                    </div>
                </div>
            </div>


            <section id="reviews">
                <div className="container">

                    <div className="card p-3 mb-4">
                        <h4>Noemi</h4>
                        <p> questa è la mia recensione del film e penso che..</p>
                        <div className="vote text-warning">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>

                            <i className="bi bi-star-fill"></i>

                            <i className="bi bi-star-fill"></i>

                            <i className="bi bi-star-fill"></i>

                        </div>


                    </div>

                </div>


            </section>
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

        </>
    )
}