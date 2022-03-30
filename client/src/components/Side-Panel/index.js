import React from "react";
import '../../assets/css/create-post.css';

function SidePanel() {
    return (
    <section className="sidebar-right">
        <div className="inner-side">
            <div className="header-card">
                <h3>We're <span className="ital">Not </span>Stack Overflow</h3>
                    </div>
                        {/* <div className="about-section">
                            <p>Welcome to Reddit <span className="ital">uhh I mean</span> Welcome to Critique Code.
                            Are you tired of getting incessantly cyber-bullied on Stack Overflow? Are you tired of
                            feeling like a terrible coder who has no business opening up their IDE everyday?
                            <br>
                            <span className="ital">
                            Welcome to Reddit dot com
                            </span>
                            </br>
                            Here you can write the worst code imaginable and post it for a laugh, or if that terrible
                            code was an accident, then you can look for feed back.
                            <br>
                            Are you a great coder looking to help others learn? Are you a bad coder looking to learn? Or
                            Are you painfully average and just looking to share the dumbest for loop you could think of
                            writing?
                            </br>
                            <span className="ital">
                            Welcome to Critique Reddit Overflow
                            </span>
                            </p>
                        </div> */}
                    <div className="create-button">
                <button id="create-post-btn" className="create-post auth-btns">Create a post</button>
            </div>
        </div>
    </section>
    )
};

export default SidePanel;