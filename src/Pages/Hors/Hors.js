import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Hors.scss";
import { API_KEY } from "../../Components/API/API";
import Detail from "../DetaileHors/Detail";
import { TOKEN } from "./../../Components/API/API";

const Hors = () => {
  const [hors, setHors] = useState([]);

  async function getHors() {
    try {
      let { data } = await axios(`http://3.93.51.230/api/auth`);
      setHors(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getHors();
  }, []);

  return (
    <div id="hors">
      <div className="container">
        <div className="hors">
          {hors.length > 0 ? (
            hors.map((el, idx) => (
              <Detail getHors={getHors} el={el} idx={idx} />
            ))
          ) : (
            <div className="loader">
              <svg viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
              </svg>
            </div>
          )}
        </div>
        <a href="https://wa.me/996557106446">
          <button>Жылкы кошуу</button>
        </a>
      </div>
    </div>
  );
};

export default Hors;
