import React from "react";

function Profile() {
    return (
    <section class="side-info">
        <section class="sidebar-right">
            <div class="inner-side">
                <div class="header-card">
                    <button class="edit-post auth-btns" id="edit-profile-btn">Edit</button>
                            <h3 id="user-username"></h3>
                        <div>
                            <h4 id="title-user"></h4>
                        </div>
                <img class="profile-icon"></img>
                </div>
                <div class="about-section">
                    <p id="github-id"></p>
                    <p id="bio-text"></p>
                </div>
                <div>
                    <div class="about-section">
                        <p> posts <span> comments</span></p>
                    </div>
                </div>
            </div>
        </section>
    </section>
    )
}

export default Profile;