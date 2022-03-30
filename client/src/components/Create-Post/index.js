import React, { useState } from "react";
import ReactDom from "react-dom";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../../utils/mutations";

import Auth from "../../utils/auth";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#e9e9e9",
  padding: "25px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

function CreatePost({ open, onClose }) {
  // sign up form
  const [createPostState, setCreatePostState] = useState({
    title: "",
    post_body: "",
  });

  const handleCreatePostChange = (event) => {
    const { name, value } = event.target;

    setCreatePostState({
      ...createPostState,
      [name]: value,
    });
  };

  // submit sign up form
  const handleFormSubmitCreatePost = async (event) => {
    event.preventDefault();

    try {
      const mutationResponse = await createPost({
        variables: { ...createPostState },
      });

      console.log(mutationResponse);
    } catch (e) {
      console.error(e);
    }
  };

  if (!open) return null;

  return ReactDom.createPortal(
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        <div id="createPost-modal" className="modal">
          <div className="modal-content container right-panel-active">
            <div className="container_form container_createPost">
              <form
                className="form"
                id="form1"
                onSubmit={handleFormSubmitCreatePost}
              >
                <h2 className="form_title">Join in on the fun!</h2>
                <input
                  type="text"
                  className="input"
                  name="title"
                  placeholder="Post Title"
                  id="post-create"
                  autoComplete="off"
                  value={signUpState.title}
                  onChange={handleCreatePostChange}
                />
                <input
                  type="text"
                  className="input"
                  name="post_body"
                  placeholder="Post Text"
                  id="post_body-text"
                  autoComplete="off"
                  value={signUpState.post_body}
                  onChange={handleCreatePostChange}
                />

                <button type="submit" className="auth-button" id="unique-btn">
                  Submit
                </button>
              </form>
              {error && <div>Create Post Failed</div>}
            </div>

            <div className="container_form container_post"></div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default CreatePost;
