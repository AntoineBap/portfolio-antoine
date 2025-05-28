import React from "react";
import "../styles/about.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-infos">
        <div className="about-title">À propos de moi</div>
        <div className="about">Je m’appelle Antoine Baptista Martini, développeur basé en région parisienne, passionné par les technologies et le monde du web. Après un parcours initial orienté vers les mathématiques, j’ai choisi de me consacrer à l’informatique, séduit par l’aspect visuel, interactif et créatif du développement web. Cette transition m’a permis de trouver un équilibre entre rigueur technique et expression personnelle. J’ai acquis de solides compétences en front-end et back-end, me permettant aujourd’hui de travailler efficacement en tant que développeur front-end, back-end et full stack. Mon objectif est de concevoir des applications modernes, performantes et intuitives, tout en restant en veille constante sur les évolutions du secteur.</div>
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