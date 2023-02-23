import React from "react";
import "./Cards.css";
import { FaShareAlt, FaHeart, FaCommentAlt } from "react-icons/fa";
const Cards = (props) => {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${props.background})` }}
    >
      <div className="container">
        <div className="left">
          <div className="top">
            <div className="img">
              <img src={props.poster} alt="" />
            </div>
            <div className="details">
              <h2>{props.name}</h2>
              <span>
                {props.year}, {props.director}
              </span>
              <div className="time">
                <span className="movie">{props.length}</span>
                <span>&nbsp;&nbsp;{props.genre}</span>
              </div>
            </div>
          </div>
          <div className="middle">
            <p>{props.story}</p>
          </div>
          <div className="bottom">
            <FaShareAlt />
            <FaHeart />
            <FaCommentAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
