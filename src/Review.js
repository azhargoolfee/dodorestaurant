import { Link } from "react-router-dom";

const Review = ({ reviews}) => {

    return (
        <div className="review-list">
            {reviews.map((review) => (
                <div className="review-preview" key={review.id}>
                    <Link to={`/review/${review.id}`}> <h2>{review.title}</h2>
                    <p>Written by {review.name}</p></Link>
                   
                    
                </div>
            ))}
        </div>
    );
}

export default Review;