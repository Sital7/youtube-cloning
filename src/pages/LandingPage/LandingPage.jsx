import { Link, useNavigate } from "react-router-dom";
import { FaPlayCircle, FaSearch, FaVideo } from "react-icons/fa";
import "./LandingPage.css";
import logo from '../../assets/logo.png'

export default function LandingPage({ setCategory }) {
  const navigate = useNavigate();

  const handleWatchVideosClick = () => {
    const categoryId = '10';
    setCategory(categoryId);
    navigate(`/watchvideos/${categoryId}`);
  };

  return (
    <div className="landing-page">
      <nav className="navbar">
        <h1 className="logo"><img className="logo" src={logo} alt="YouTube Clone" />VidTube</h1>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>

      <header className="hero">
        <h2>Stream, Watch & Upload Videos</h2>
        <p>Experience a seamless video streaming platform with powerful search and upload capabilities.</p>
        <Link to="/home" className="cta-button">Explore Now</Link>
      </header>

      <section className="features">
        <div className="feature-card" onClick={handleWatchVideosClick}>
          <FaPlayCircle className="icon" />
          <h3>Watch Videos</h3>
          <p>Discover millions of videos across various categories.</p>
        </div>
        <div className="feature-card" onClick={() => navigate("/search")}>
          <FaSearch className="icon" />
          <h3>Smart Search</h3>
          <p>Find exactly what you're looking for in seconds.</p>
        </div>
        <div className="feature-card" onClick={() => navigate("/upload")}>
          <FaVideo className="icon" />
          <h3>Upload Content</h3>
          <p>Share your creativity with the world effortlessly.</p>
        </div>
      </section>
    </div>
  );
}
