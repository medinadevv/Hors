import React, {useEffect, useState} from 'react';
import './Sing.scss'
import {admin} from "../../Components/API/API";
import {useNavigate} from "react-router-dom";

const Sing = () => {
    const navigate = useNavigate();
    const [valid, setValid] = useState({
        log: false,
        pass: false,
    });
    const [values, setValues] = useState(
        JSON.parse(localStorage.getItem("user")) || {
            login: "",
            password: "",
        }
    );
    function handleLogIn() {
        if (admin.login !== values.login || values.login.length === 0) {
            setValid({...valid, log: (valid.log = true)});
        } else {
            setValid({...valid, log: false});
        }
        if (admin.password != values.password || values.password.length === 0) {
            setValid({...valid, pass: true});
        } else {
            setValid({...valid, pass: false});
        }

        if (admin.login === values.login && admin.password === values.password) {
            navigate("/profile");
            localStorage.setItem("user", JSON.stringify(values));
        }
    }

    function EventLog(e) {
        setValues({...values, login: e.target.value});
        setValid({...valid, log: false});
    }

    function EventPass(e) {
        let str = e.target.value;
        str = str
            .split("")
            .filter((el) => +el || el === "0")
            .join("")
            .slice(0, 9);
        setValues({...values, password: str});
        setValid({...valid, pass: false});
    }

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("user"))) {
            navigate("/profile");
        }
    }, []);


    return (
        <div id="sing">
            <div className="container">
                <div className="sing">
                    <div className='sing--text'>
                        <input style={{borderColor: valid.log ? "red" : "",}} value={values.login} onChange={EventLog} type="text" placeholder="телефон"/>
                        <input style={{borderColor: valid.pass ? "red" : ""}} value={values.password} onChange={EventPass} type="text" placeholder="купуя сөз"/>
                        <button onClick={handleLogIn}>Кирүү</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sing;