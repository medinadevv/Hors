import React from "react";
import "./Profile.scss";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    return (
        <div id="profile">
            <div className="container">
                <div className="profile">
                    <div className='homeBlock'>
                        <div className="profile--blocks">
                            <div className="profile--blocks__block">
                                <NavLink to="/profile/admin">Аттарды кошуу</NavLink>
                            </div>
                            <div className="profile--blocks__block1">
                                <NavLink to="/profile/block1">Маалымат</NavLink>
                            </div>
                            <div
                                onClick={() => {localStorage.removeItem("user");navigate("/");}}
                                className="profile--blocks__block1"
                            ><a>Чыгуу</a>
                            </div>
                        </div>
                    </div>
                    <div className="profile--routes">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
