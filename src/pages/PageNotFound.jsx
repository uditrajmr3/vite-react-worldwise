import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <div className="decorative-line"></div>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="button-group">
          <button onClick={() => navigate(-1)} className="back-button">
            Go Back
          </button>
          <button onClick={() => navigate("/")} className="home-button">
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
