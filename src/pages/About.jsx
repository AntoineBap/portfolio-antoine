import React from "react";
import "../styles/about.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-infos">
        <div className="about-title">À propos de</div>
        <div className="about">Je m'appelle Antoine Baptista Martini, développeur web en région parisienne. 
          Après une réorientation en provenance des mathématiques, j'ai découvert le développement web et j’ai décidé de m'y consacrer pleinement. Une passion s'est éveillée en moi, séduit par l'aspect visuel, créatif du monde du web. Ma réorientation m'a permis d'équilibrer mon travail entre rigueur et créativité. 
          J'ai rapidement acquis des connaissances poussées en <strong>front-end</strong> et <strong>back-end</strong>, me démarquant par <strong>ma vitesse d’apprentissage</strong>, ainsi que ma <strong>motivation</strong> et ma <strong>rigueur</strong>.   
          Ces compétences me permettent aujourd’hui de travailler efficacement en tant que développeur front-end ou back-end pour avoir la possibilité de concevoir des applications modernes, performantes, et intuitives pour le grand public.  </div>
        <button
            onClick={() => window.open(`${import.meta.env.BASE_URL}cv_antoine.pdf`, '_blank')}
            className="btn"
        >
          Consulter mon CV
        </button>
        
      </div>
    </div>
  );
};

export default About;