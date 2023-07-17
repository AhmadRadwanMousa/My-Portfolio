import "./App.css";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import CredentialPage from "./Pages/CredentialsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/Contact" Component={ContactPage} />
        <Route exact path="/About" Component={AboutPage} />
        <Route exact path="/Credentials" Component={CredentialPage} />
      </Routes>
    </Router>
  );
}

export default App;
