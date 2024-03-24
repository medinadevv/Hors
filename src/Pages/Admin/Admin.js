import React, {useState} from "react";
import "./Admin.scss";
import axios from "axios";

const Admin = () => {
    //  const [values, setValues] = useState({
    //      image: '',
    //      name: "",
    //      profession: "",
    //  });
    //
    //  function Img(e){
    //      let file = e.target.files[0]
    //      if(file){
    //          setValues({...values , image:URL.createObjectURL(file)})
    //      }
    //  }
    //  function handleInputValue(e) {
    //      setValues({ ...values, [e.target.name]: e.target.value });
    //  }
    // async function addPost(){
    //      let Object = {
    //          image: [
    //              values.image,
    //              values.image,
    //              values.image
    //          ],
    //          name: "Emir",
    //          nameOfOwner: "Hors",
    //          nickName: "KaraAt",
    //          dateOfBirthday: "2024-03-24",
    //          color: "black",
    //          gender: "man",
    //          fatherOfHorseId: 0,
    //          matherOfHorseId: 0,
    //          nameOfTrainer: "AAA",
    //          nameOfSayapker: "BBB",
    //          country: "Kyrgyzstan",
    //          additionalData: "sssssssssss"
    //      }
    //      await axios.post('http://3.93.51.230/api/horse' , Object).then(res => {
    //          alert('lol')
    //          console.log(res)
    //      }).catch(error => {
    //          alert(error)
    //      })
    //  }


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
        additionalData: ""
    })
    const [img, setImg] = useState('')

    function handleImageValue(e) {
        let file = e.target.files[0]
        if (file) {
            let image = []
            image.push(URL.createObjectURL(file))
            setValues({...values, image: image})
        }
    }

    console.log(values)

    return (
        <div id="admin">
            <div className="container">
                <div className="admin">
                    <div className="admin--title">
                        <input onChange={handleImageValue} name='image' type="file"/>
                        <input name='name' type="text" placeholder="Аты"/>
                        <input name='nameOfOwner' type="text" placeholder="Ээсинин аты"/>
                        <input name='nickName' type="text" placeholder="Лакап аты"/>
                        <input name='dateOfBirthday' type="date" placeholder="Лакап аты"/>
                        <input name='color' type="text" placeholder="Өңү"/>
                        <select name="gender">
                            <option value="man">Эркек</option>
                            <option value="woman">Ургаачы</option>
                        </select>
                        <input name='fatherOfHorseId' type="text"/>
                        <input name='matherOfHorseId' type="text"/>
                        <input name='nameOfTrainer' type="text" placeholder="Машыктыруучунун аты"/>
                        <input name='nameOfSayapker' type="text" placeholder="Саяпкердин аты"/>
                        <input name='country' type="text" placeholder="Туулган жери"/>
                        <input name='additionalData' type="text" placeholder="Кощумча маалыматтар"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
