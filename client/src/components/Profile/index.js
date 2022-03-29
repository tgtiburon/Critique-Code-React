import React, { useEffect } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import { useAppContext } from '../../utils/GlobalState';

function Profile() {
    // const [state, dispatch] = useAppContext();

    const { loading, data } = useQuery(QUERY_USER);

    console.log(data);

    return (
    <section className="side-info">
        <section className="sidebar-right">
            <div className="inner-side">
                <div className="header-card">
                    <button className="edit-post auth-btns" id="edit-profile-btn">Edit</button>
                            <h3 id="user-username"></h3>
                        <div>
                            <h4 id="title-user"></h4>
                        </div>
                <img className="profile-icon"></img>
                </div>
                <div className="about-section">
                    <p id="github-id"></p>
                    <p id="bio-text"></p>
                </div>
                <div>
                    <div className="about-section">
                        <p> posts <span> comments</span></p>
                    </div>
                </div>
            </div>
        </section>
    </section>
    )
}

export default Profile;