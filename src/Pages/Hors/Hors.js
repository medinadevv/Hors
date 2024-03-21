import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Hors.scss'
import {API_KEY} from "../../Components/API/API";
import Detail from "../DetaileHors/Detail";

const Hors = () => {
    const [hors, setHors] = useState([])
    console.log(hors)

    function getHors() {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then((res) => {
                setHors(res.data.results)
            })
    }

    useEffect(() => {
        getHors()
    }, [])

    return (
        <div id="hors">
            <div className="container">
                <div className="hors">
                    {
                        hors ?
                            hors.map((el) => (
                                    <Detail el={el}/>

                                )
                            ) : <h1>Loading</h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default Hors;