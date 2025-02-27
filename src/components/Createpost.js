import React, { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";


const Createpost = () => {
  const {addPost} = useContext(PostList)

const userIdElement = useRef();
const postTitleElement = useRef();
const postBodyElement = useRef();
const reactionElement = useRef();
const tagsElement = useRef();

const handleSubmit = (event) => {
  event.preventDefault();
  const userId = userIdElement.current.value;
  const postTitle = postTitleElement.current.value;
  const postBody = postBodyElement.current.value;
  const reaction = reactionElement.current.value;
  const tags = tagsElement.current.value.split(' ')

  userIdElement.current.value = "";
  postTitleElement.current.value = "";
  postBodyElement.current.value = "";
  reactionElement.current.value = "";
  tagsElement.current.value = "";




  addPost(userId, postTitle, postBody, reaction, tags);
}

    return(
        <form className="Create-Post" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">Username</label>
    <input ref={userIdElement} required placeholder="Enter your Username" type="text" className="form-control" id="userId" />
  </div>        
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input ref={postTitleElement} required placeholder="How are you feeling today!" type="text" className="form-control" id="title" />
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea ref={postBodyElement} required rows={4} placeholder="Tell us more about it." type="text" className="form-control" id="body" />
  </div>
  <div className="mb-3">
    <label htmlFor="reaction" className="form-label">Number of Reaction</label>
    <input ref={reactionElement} required placeholder="How many people reacted" type="text" className="form-control" id="reaction" />
  </div> 
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter your Hashtags</label>
    <input ref={tagsElement} required placeholder="Please enter your tags using space." type="text" className="form-control" id="tags" />
  </div> 
  <button type="submit" className="btn btn-primary">Post</button>
</form>
    );
}

export default Createpost;