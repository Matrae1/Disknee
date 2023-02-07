import React from "react";
import "../Styles/Details.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import GroupsIcon from "@mui/icons-material/Groups";
import { useParams } from "react-router-dom";
import { films } from "../data";


const Details = () => {
  const { id } = useParams();
  const film = films.find((film) => +film.id === +id);

 
  return (
    <div className="details__main">
      <div className="details__background">
        <img src={film.background} alt="" />
      </div>
      <div className="details__title">
        <img src={film.detailPhoto} alt="" />
      </div>
      <div className="details__controls">
        <button className="playButton">
          <PlayArrowIcon />
          <span>PLAY</span>
        </button>
        <a href={film.trailer} target="_blank">
        <button className="trailerButton">
          <PlayArrowIcon />
          <span className="trailer">TRAILER</span>
        </button>
        </a>
        <button  className="addButton">
          <AddIcon className="icon"/>
        </button>
        <button className="groupButton">
          <GroupsIcon className="icon" />
        </button>
      </div>
      <div className="details__sub-title">{film.tags}</div>
      <div className="details__description">{film.description}</div>
      <div className="film__details">
        <h2 className="details__section">DETAILS</h2>
        <div className="film__info">
          <div className="film__description--half">
            <h2>{film.title}</h2>
            <p>{film.plot}</p>
          </div>
          <div className="film__info--content">
            <div className="half">
              <h3>Duration:</h3>
              <p>{film.duration}</p>
              <h3>Release Date:</h3>
              <p>{film.releaseDate}</p>
              <h3>Genre:</h3>
              <p>{film.genre}</p>
            </div>
            <div className="half__2">
              <h3>Director :</h3>
              <p>{film.director}</p>
              <h3>Starring :</h3>
              <p>{film.starring}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
