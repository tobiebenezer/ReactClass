import {
  BrowserRouter as Router,
  Routes,
  Route,   
} from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";


const router =function(){
    return (
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
}

export default router;