import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home'
import Feed from './pages/feed/feed'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/feed" element={ <Feed /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
