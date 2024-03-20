import React from 'react';
import './Detail.scss'
import {FaRegCircleUser} from "react-icons/fa6";

const Detail = ({el}) => {
    console.log(el)
    return (
        <div id="detail">
            <div className="container">
                <div className="detail">
                    <div className="detail__title">
                        <div className="detail__title__user">
                            <FaRegCircleUser/>
                            <div className="detail__title__user__text">
                                <h1>Аты-жөнү</h1>
                                <h2>Ээси</h2>
                            </div>
                        </div>
                        <div className="detail__title__img">
                            {/*<img src={el.img} alt=""/>*/}
                            {/*<h1>{el.title.slice(0, 10)}</h1>*/}
                        </div>
                        <div className="detail__title__nav">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;