import React, { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";


const Createpost = () => {
  const {addPost} = useContext(PostList)

const userIdElement = useRef();
const postTitleElement = useRef();
const postBodyElement = useRef();
const reactionsElement = useRef();
const tagsElement = useRef();

const handleSubmit = (event) => {
  event.preventDefault();
  const userId = userIdElement.current.value;
  const postTitle = postTitleElement.current.value;
  const postBody = postBodyElement.current.value;
  const reactions = {
    likes: Number(reactionsElement.current.value.split(' ')[0]) || 0,
    dikslikes: Number(reactionsElement.current.value.split(' ')[1]) || 0

  };
  const tags = tagsElement.current.value.split(' ')

  userIdElement.current.value = "";
  postTitleElement.current.value = "";
  postBodyElement.current.value = "";
  reactionsElement.current.value = "";
  tagsElement.current.value = "";

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      title: postTitle,
      body: postBody,
      reactions: reactions,
      userId: userId,
      tags: tags,
  })
  })
  .then(res => res.json())
  .then(console.log);


  addPost(userId, postTitle, postBody, reactions, tags);
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
    <label htmlFor="reactions" className="form-label">Number of reactions</label>
    <input ref={reactionsElement} required placeholder="How many people reacted" type="text" className="form-control" id="reactions" />
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