import React from "react";
import "./Detail.scss";
import user from "../../img/User_cicrle_light.svg";

const Detail = ({ el, idx }) => {
  return (
    <div key={idx} id="detail">
      <div className="container">
        <div className="detail">
          <div className="detail__title">
            <div className="detail__title__user">
              <img src={user} alt="" />
              <div className="detail__title__user__text">
                <h1>Аты-жөнү</h1>
                <h2>Ээси</h2>
              </div>
            </div>
            <div className="detail__title__img">
              <img
                src={`https://image.tmdb.org/t/p/w1280${el ? el.poster_path : ""}`} alt=""/>
              <h3>{el ? el.original_title : ""}</h3>
              <h4>Жылы</h4>
              <h5>2015</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
