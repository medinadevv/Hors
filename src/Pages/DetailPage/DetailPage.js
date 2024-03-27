import React, { useEffect, useState } from "react";
import "./DetailPage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

export const DetailPage = () => {
  const { getHorsesByUserId } = useParams();

  const [index, setIndex] = useState(0);
  const [hors, setHors] = useState([]);
  const [oneHors, setOneHors] = useState(null);

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

  function getOneHorsInfo() {
    let one = hors.find((el) => el.id == getHorsesByUserId);
    setOneHors(one);
  }

  useEffect(() => {
    getOneHorsInfo();
  }, [hors]);

  // async function getHorsesById() {
  //   let { data } = await axios(`http://3.93.51.230/api/horse/${1}`);

  //   console.log(data);
  // }

  // useEffect(() => {
  //   getHorsesById();
  // }, []);

  console.log(oneHors);

  return (
    <section id="detailPage">
      <div className="container">
        {oneHors ? (
          <div className="detailPage">
            <div className="detailPage__user">
              <img
                src="https://media.licdn.com/dms/image/C5612AQGzjea_d3OCIw/article-cover_image-shrink_600_2000/0/1520238001285?e=2147483647&v=beta&t=cxteDaUnV9tBMkJoWrZnL8H3AKGGF3Ohz3Zsrb_11RE"
                alt=""
              />
              <div className="detailPage__user__text">
                <p>{oneHors.nameOfOwner}</p>
                <p>Ээси</p>
              </div>
            </div>
            <h1>Кашка</h1>
            <div className="detailPage__horse">
              <div className="detailPage__horse__img">
                <div className="detailPage__horse__img__images">
                  {oneHors.imagesOfHorse.map((el, idx) => (
                    <img
                      key={idx}
                      onClick={() => setIndex(idx)}
                      src={el}
                      alt="horses"
                      style={{
                        border: index === idx ? "2px solid #000" : "",
                        width: index === idx ? "90px" : "",
                        height: index === idx ? "120px" : "",
                      }}
                    />
                  ))}
                </div>
                <img
                  className="detailPage__horse__img__one"
                  src={oneHors.imagesOfHorse[index]}
                  alt=""
                />
              </div>
              <div className="detailPage__horse__info">
                <h4>
                  <span>Аты:</span>
                  {" " + oneHors.nameOfHorse}
                </h4>
                <h4>
                  <span>Туулган жылы:</span>
                  {" " + oneHors.dateOFBirth.slice(0, 4)}
                </h4>
                <h4>
                  <span>Порода:</span>
                  {" " + "aigyr"}
                </h4>
                <h4>
                  <span>Ээси:</span>
                  {" " + oneHors.nameOfOwner}
                </h4>
                <h4>
                  <span>Атасы:</span>
                  {" " + "leonid"}
                </h4>
              </div>
            </div>
          </div>
        ) : (
          <div className="loader">
            <svg viewBox="25 25 50 50">
              <circle r="20" cy="50" cx="50"></circle>
            </svg>
          </div>
        )}
      </div>
    </section>
  );
};
