import "./App.css";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/Contact" Component={ContactPage} />
      </Routes>
    </Router>
  );
}

export default App;
