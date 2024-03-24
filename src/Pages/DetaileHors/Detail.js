import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Detail.scss";
import axios from "axios";
import { TOKEN } from "./../../Components/API/API";

const Detail = ({ el, idx }) => {
  const [del, setDel] = useState(false);

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
            <div className="detail__title__img">
              <img src={el.imageOfHorse} alt="" />
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
