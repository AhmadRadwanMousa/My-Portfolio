import "./App.css";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/Contact" Component={ContactPage} />
        <Route exact path="/About" Component={AboutPage} />
      </Routes>
    </Router>
  );
}

export default App;
