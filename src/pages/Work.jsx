import React from "react";
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import workList from "../data/myData.json";
import "../styles/work.scss";

const WorkDetail = () => {
  const { id } = useParams();
  const [work, setWork] = useState(null);
  const [notFound, setNotFound] = useState(false);
  

  useEffect(() => {
    const appData = workList.find((app) => app.id === id);
    
    if (appData === undefined) {
      setNotFound(true);
    } else {
      setWork(appData);
    }
  }, [id]);

  if (notFound) {
    return <Navigate to="/notfound" replace />;
  }

  if (work === null) return null;

  const tasks = work.tasks.map((work, index) => <li key={index}><p>{work}</p></li>)

  const images = work.images.map((image, index) => <img className="website-img" src={image} alt="work website image" /> )


  return (
    <div className="work">
      <div className="work-container">
        <div className="title-container">
          <h1>{work.title}</h1>
          <h2>{work.language}</h2>
        </div>
        <div className="top-img">
          <img className="cover" src={work.topimg} alt="work cover" />
        </div>
        <ul className="work-infos">
          <li className="description"><p><span className="title">Description : </span>{work.description}</p></li>
          <li className="date"><p><span className="title">Date de début du projet : </span>{work.date}</p></li>
          <li className="status"><p><span className="title">Statut : </span>{work.status}</p></li>
        </ul>
        {work.link && (
          <div className="linkDiv">
            <a href={work.link} target="_blank">
              VISITER LE SITE ➜
            </a>
          </div>
        )}
        {work.github && (
          <div className="linkDiv">
            <a href={work.github} target="_blank">
              LIEN DU REPO GITHUB ➜
            </a>
          </div>
        )}
        <div className="separation-line"></div>
        <h1>Tâches réalisées</h1>
        <ul className="work-infos" id="tasks-list">{tasks}</ul>
        <div className="img-container">{images}</div>
      </div>
    </div>
  );
};

export default WorkDetail;