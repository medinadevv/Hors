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
    let file = e.target.files?.[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let img = new Image();
      img.src = reader.result;
      img.onload = () => {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        if (!ctx) return;
        let maxWidth = 800;
        let maxHeight = 600;
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          let ratio = Math.min(maxWidth / width, maxHeight / height);
          width *= ratio;
          height *= ratio;
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        let compressedUrl = canvas.toDataURL("image/jpeg");
        if (compressedUrl) {
          values.image.push(compressedUrl);
          setValues({
            ...values,
            image: values.image.slice(0, 4),
          });
        }
      };
    };
    reader.onerror = () => {
      console.log("file", reader.error);
    };
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
    const res = await axios.post(`http://3.93.51.230/api/horse/`, values, {
      headers: {
        Authorization: TOKEN,
      },
    });
    console.log(res);
  }

  console.log(values);

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
              <option value="woman">MALE</option>
            </select>
            <input
              onChange={handleInputValue}
              name="fatherOfHorseId"
              type="number"
            />
            <input
              onChange={handleInputValue}
              name="matherOfHorseId"
              type="number"
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
