import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Detail.scss";
import axios from "axios";
import { TOKEN } from "./../../Components/API/API";
import { useNavigate } from "react-router-dom";

const Detail = ({ getHors, el, idx }) => {
  const [del, setDel] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      setDel(true);
    }
  }, []);

  async function deleteHors(id) {
    await axios.delete(`http://3.93.51.230/api/horse/${id}`, {
      headers: {
        Authorization: TOKEN,
      },
    });
    getHors();
  }

  return (
    <div key={idx} id="detail">
      <div className="container">
        <div className="detail">
          <div className="detail__title">
            <div className="detail__title__user">
              <img src={el.imageOfOwner} alt="" />
              <div className="detail__title__user__text">
                <h1>{el.nameOfOwner}</h1>
                <h2>Ээси</h2>
              </div>
            </div>
            <div
              onClick={() => navigate(`/detail_page/${el.id}`)}
              className="detail__title__img"
            >
              <img src={el.imagesOfHorse[0]} alt="" />
              <h3>{el.nameOfHorse}</h3>
              <h4>Жылы</h4>
              <h5>{el.dateOFBirth}</h5>
            </div>
            <p
              style={{
                display: del ? "" : "none",
              }}
              onClick={() => deleteHors(el.id)}
            >
              delete
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
