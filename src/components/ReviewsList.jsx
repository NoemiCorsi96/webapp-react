import ReviewCard from "./ReviewCard";
export default function ReviewsList({ reviews }) {
    return (
        <section id="reviews">
            <div className="container">


                {
                    reviews.map(review => (
                        <ReviewCard key={review.id} review={review} />
                    ))
                }
            </div>


        </section>
    )
}