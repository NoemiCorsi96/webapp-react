export default function ReviewCard({ review }) {
    return (
        <div className="card p-3 mb-3 position-relative" >
            <h4>{review.name}</h4>
            <p> {review.text}</p>
            <div> vote: {review.vote}</div>
            <div className="vote text-warning">
                {'★'.repeat(review.vote)}{'☆'.repeat(5 - review.vote)}

            </div>


        </div>
    )
}