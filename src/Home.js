import Review from "./Review";
import useFetch from "./useFetch";
const Home = () => {
    const {data : reviews} = useFetch('http://localhost:8000/reviews')


   
    return (
        <div className="home">
           
            {reviews && <Review reviews={reviews}/>}
        </div>
    );
    
    
}

export default Home;  