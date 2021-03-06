import React, { useState } from "react";
// import "../../assets/css/create-post.css";
import Auth from "../../utils/auth";
import CreatePost from "../Create-Post";

import Login from "../Login";

function SidePanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCreatePostOpen, setCreatePostIsOpen] = useState(false);
  const loggedIn = Auth.loggedIn();
  return (
    <section className="sidebar-right">
      <div className="inner-side">
        <div className="header-card">
          <h3>
            We're <span className="ital">Not </span>Stack Overflow
          </h3>
        </div>
        <div className="about-section">
            <p>Welcome to Reddit Welcome to Critique Code.
            Are you tired of getting incessantly cyber-bullied on Stack Overflow? Are you tired of
            feeling like a terrible coder who has no business opening up their IDE everyday?
            Welcome to Reddit dot com
            Here you can write the worst code imaginable and post it for a laugh, or if that terrible
            code was an accident, then you can look for feed back.
            Are you a great coder looking to help others learn? Are you a bad coder looking to learn? Or
            Are you painfully average and just looking to share the dumbest for loop you could think of
            writing?
            Welcome to Critique Reddit Overflow
            </p>
        </div>
        <div className="create-button">
          {loggedIn && (
            <>
              <button
                onClick={() => setCreatePostIsOpen(true)}
                id="create-post-btn"
                className="create-post auth-btns"
              >
                Create a post
              </button>
              <CreatePost
                open={isCreatePostOpen}
                onClose={() => setCreatePostIsOpen(false)}
              />
            </>
          )}

          {!loggedIn && (
            <>
              <button
                onClick={() => setIsOpen(true)}
                id="other-login-btn"
                className="create-post auth-btns"
              >
                Login
              </button>
              <Login open={isOpen} onClose={() => setIsOpen(false)} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default SidePanel;

