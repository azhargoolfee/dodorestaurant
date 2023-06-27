import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ReviewDetails from './ReviewDetails';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/create" exact element={<Create/>}/>
            <Route path="/review/:id" exact element={<ReviewDetails/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
