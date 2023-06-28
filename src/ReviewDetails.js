import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ReviewDetails = () => {
    const {id} = useParams();
    const {data : review} = useFetch('https://segdata.onrender.com/reviews/' + id);
    return (
        <div className="review-details">
            <h2>Review details - { id } </h2>
            {review && (
                <article> <h2>{
                    review.title
                }</h2>
                <h2> Experience : { 
                    review.experience
                }</h2>
                <p>Written by {review.author}</p>
                <div>{review.body}</div>
                </article>

            )}
        </div>
    );
}
 
export default ReviewDetails;