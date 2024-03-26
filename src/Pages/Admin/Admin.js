import React, { useState } from "react";
import "./Admin.scss";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { TOKEN } from "./../../Components/API/API";

const Admin = () => {
  const [values, setValues] = useState({
    image: [],
    name: "",
    nameOfOwner: "",
    nickName: "",
    dateOfBirthday: "",
    color: "",
    gender: "",
    fatherOfHorseId: 0,
    matherOfHorseId: 0,
    nameOfTrainer: "",
    nameOfSayapker: "",
    country: "",
    additionalData: "",
  });

  function handleImageValue(e) {
    let file = e.target.files[0];
    if (file) {
      values.image.push(URL.createObjectURL(file));
      setValues({
        ...values,
        image: values.image.slice(0, 5),
      });
    }
  }

  function handleInputValue(e) {
    if (e.target.name !== "image") {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  }

  const [del, setDel] = useState(false);

  function delImg(id) {
    values.image.splice(id, 1);
    setValues({ ...values, image: values.image });
  }

  async function handleAaddHors() {
    await axios.post(`http://3.93.51.230/api/horse`, values, {
      headers: {
        Authorization: TOKEN,
      },
    });
  }

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <div className="admin--title">
            <div className="admin--title--block">
              <label>
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/add-image-photo-icon.png"
                  alt="add image"
                />
                <input onChange={handleImageValue} name="image" type="file" />
              </label>
              <div className="admin--title--block--images">
                {values.image.map((el, idx) => (
                  <div className="admin--title--block--images--one">
                    <img src={el} alt="" />
                    <IoClose onClick={() => delImg(idx)} className="del" />
                  </div>
                ))}
              </div>
            </div>
            <input
              onChange={handleInputValue}
              name="name"
              type="text"
              placeholder="Аты"
            />
            <input
              onChange={handleInputValue}
              name="nameOfOwner"
              type="text"
              placeholder="Ээсинин аты"
            />
            <input
              onChange={handleInputValue}
              name="nickName"
              type="text"
              placeholder="Лакап аты"
            />
            <input
              onChange={handleInputValue}
              name="dateOfBirthday"
              type="date"
              placeholder="Лакап аты"
            />
            <input
              onChange={handleInputValue}
              name="color"
              type="text"
              placeholder="Өңү"
            />
            <select onChange={handleInputValue} name="gender">
              <option value="man">Эркек</option>
              <option value="woman">Ургаачы</option>
            </select>
            <input
              onChange={handleInputValue}
              name="fatherOfHorseId"
              type="text"
            />
            <input
              onChange={handleInputValue}
              name="matherOfHorseId"
              type="text"
            />
            <input
              onChange={handleInputValue}
              name="nameOfTrainer"
              type="text"
              placeholder="Машыктыруучунун аты"
            />
            <input
              onChange={handleInputValue}
              name="nameOfSayapker"
              type="text"
              placeholder="Саяпкердин аты"
            />
            <input
              onChange={handleInputValue}
              name="country"
              type="text"
              placeholder="Туулган жери"
            />
            <input
              onChange={handleInputValue}
              name="additionalData"
              type="text"
              placeholder="Кощумча маалыматтар"
            />
            <button onClick={handleAaddHors}>Кошуу</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
