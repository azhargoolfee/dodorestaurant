const Create = () => {
    return (
        <div className="create">
            <h2>Add a New Review
            </h2>
            <form>
                <label>
                    Title:
                </label>
                <input type="text" 
                required
                />
                <label>
                    Review:
                </label>
                <textarea 
                required
                ></textarea>
                <label>Name :</label>
                <input type="text" required/>
                <label> Food item :</label>
                <select>
                    <option value="Curry">Curry</option>
                    <option value="Roti">Roti</option>
                    <option value="Dhall">Dhall</option>
                    <option value="Briani">Briani</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}
 
export default Create;