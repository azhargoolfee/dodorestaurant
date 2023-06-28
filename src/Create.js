import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [name, setName] = useState('');
    const [experience, setExperience] = useState()
    const backReview = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const review = { title, body, name, experience };
        fetch('http://localhost:8000/reviews',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(review)
        }).then(() => {
            //console.log('new blog added');
            backReview('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a New Review
            </h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>
                    Review:
                </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Name :</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                />
                <label> Rate your experience :</label>
                <select
                value={experience}
                onChange = {(e) => setExperience(e.target.value)}
                >
                    <option value="VeryGood">Very Good</option>
                    <option value="Good">Good</option>
                    <option value="Average">Average</option>
                    <option value="Bad">Bad</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}

export default Create;