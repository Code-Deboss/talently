import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home'
import Feed from './pages/feed/feed'
import Signup from "./pages/login_signup_layout/Signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/feed" element={ <Feed /> } />
          <Route path="/signup" element={ <Signup /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
