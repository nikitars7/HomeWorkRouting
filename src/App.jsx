import MainPage from "./Pages/MainPage";
import AboutUs from "./Pages/AboutUs";
import Articles from "./Pages/Articles";
import Article from "./Pages/Article";
import NotFound from "./Pages/NotFound";
import Styles from "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <NavLink to="/">MainPage</NavLink>
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/aboutus">AboutUs</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
