import React, { useState } from "react";
import ReactDom from "react-dom";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../../utils/mutations";
import { useAppContext } from "../../utils/GlobalState";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Auth from "../../utils/auth";
import './style.css';
import '../Login/style.css';

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
  const [createPost, { error }] = useMutation(CREATE_POST);
  const [createPostState, setCreatePostState] = useState({
    title: "",
    post_body: "",
    tag_genre: "",
    tag_language: "",
    userName: "",
  });

  const [state, dispatch] = useAppContext();

  const { userData } = state;

  const { userName: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { userName: userParam },
  });
  if (data) {
    //console.log("--------------------------------------");
    // console.log(data.me.userName);
    createPostState.userName = data.me.userName;
  }

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

  const [animState, setAnimState] = useState(true);

  const genreSel = () => {
    setAnimState(false)
  };

  const submitPost = () => {
    setAnimState(true)
  };

  if (!open) return null;

  return ReactDom.createPortal(
        <div className="modal">
          <div className={`modal-content container ${animState ? 'right-panel-active' : ''}`}>
            <div className="container_form container_signUp">
              <form
                className="form"
                onSubmit={handleFormSubmitCreatePost}
              >
                <h2 className="form_title">Share Your Mess</h2>
                <input
                  type="text"
                  className="input"
                  name="title"
                  placeholder="Post Title"
                  id="post-title"
                  autoComplete="off"
                  value={createPostState.title}
                  onChange={handleCreatePostChange}
                />
                <input
                  type="text"
                  className="input"
                  name="post_body"
                  placeholder="Post Text"
                  id="post_body-text"
                  autoComplete="off"
                  value={createPostState.post_body}
                  onChange={handleCreatePostChange}
                />
                <button type="submit" className="auth-button" id="unique-btn">
                  Submit
                </button>
              </form>
              {error && <div>Create Post Failed</div>}
            </div>
            <div className="container_form container_signin">
                <form className='form'>
                <h2 className="form_title">The Deets</h2>
                <input
                  type="text"
                  className="input"
                  name="tag_genre"
                  placeholder="Post genre"
                  id="post_genre-text"
                  autoComplete="off"
                  value={createPostState.tag_genre}
                  onChange={handleCreatePostChange}
                />
                <input
                  type="text"
                  className="input"
                  name="tag_language"
                  placeholder="Post language"
                  id="post_language-text"
                  autoComplete="off"
                  value={createPostState.tag_language}
                  onChange={handleCreatePostChange}
                />
                <button className="auth-button" onClick={onClose}>
                  Close
                </button>
                </form>
              </div>
            <div className="container_overlay">
              <div className="overlay">
                <div className="overlay_panel overlay_left">
                  <button onClick={genreSel} className="auth-button" id="logIn">The Details</button>
                </div>
                <div className="overlay_panel overlay_right">
                  <button onClick={submitPost} className="auth-button" id="signUp">Create Post</button>
                </div>
              </div>
            </div>
            <div className="container_form container_post"></div>
          </div>
        </div>,
    document.getElementById("portal")
  );
}

export default CreatePost;
