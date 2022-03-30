import React, { useEffect } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import { useAppContext } from '../../utils/GlobalState';
import { useParams } from 'react-router-dom';
import { UPDATE_USER } from '../../utils/actions';

function Profile() {
    const [state, dispatch] = useAppContext();

    const { userData } = state;

    const { userName: userParam } = useParams();
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, 
        { variables: { userName : userParam }});
    if (data) {
        console.log(data.me)
    }
    
    useEffect(() => {
        if (data) {
            console.log(data.me)
            dispatch({
                type: UPDATE_USER,
                userData: data.me
            })
        }
    }, [data, loading, dispatch]);

    const { avatar, bio, github, title, userName } = userData

    return (
        
    <section className="side-info">
        <section className="sidebar-right">
            <div className="inner-side">
                <div className="header-card">
                    <button className="edit-post auth-btns" id="edit-profile-btn">Edit</button>
                            <h3 id="user-username">{userName}</h3>
                        <div>
                            <h4 id="title-user">{title}</h4>
                        </div>
                <img className="profile-icon" alt='profile' src={`/images/${avatar}`}></img>
                </div>
                <div className="about-section">
                    <p id="github-id">{github}</p>
                    <p id="bio-text">{bio}</p>
                </div>
                <div>
                    <div className="about-section">
                        <p> posts <span> comments</span></p>
                    </div>
                </div>
            </div>
        </section>
        <section className="side-info">
            <section className="sidebar-left">
                <div className="inner-side" id="{{posts.[0].user.id}}">
                    <div className="header-card">
                    <img src={`https://github-readme-stats.vercel.app/api/top-langs/?username=
                    ${github}`} alt='github info'></img>
                </div>
                <div id="btn-new-post-holder">
                    <button id="btn-new-post" className="auth-btns"> + New Post</button>
                </div>
                </div>
            </section>
        </section>
    </section>
    )
}

export default Profile;