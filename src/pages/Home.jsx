import React from "react";
import "../styles/home.scss";
import { useNavigate } from "react-router-dom";
import Works from "../data/MyData.json"


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="gallery">
        <div className="gallery-content">
          <h1>Réalisations</h1>
          <div className="grid">
            {Works.map((work) => (
              <button
                className="work-card"
                key={work.id}
                onClick={() => navigate(`/work/${work.id}`)}
              >
                <div className="img-wrapper"><img src={work.cover} alt='work cover'/></div>
                <p className="work-title">{work.title}</p>
                <p className="work-languages">{work.language}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;