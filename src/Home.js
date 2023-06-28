import Review from "./Review";
import useFetch from "./useFetch";
const Home = () => {
    const {data : reviews} = useFetch('https://segdata.onrender.com/reviews')


   
    return (
        <div className="home">
           
            {reviews && <Review reviews={reviews}/>}
        </div>
    );
    
    
}

export default Home;  