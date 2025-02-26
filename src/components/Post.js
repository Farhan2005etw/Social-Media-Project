import React from "react";
import { MdDelete } from "react-icons/md";


const Post = ({post}) => {
    return(
        <div className="card post-card" style={{width: "30rem"}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}

    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    <MdDelete />

  </span>
    </h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tags) => (<span class="badge text-bg-primary tag">{tags}</span>))}
    
  </div>

  <div class="alert alert-success reaction" role="alert">
  This post has been reacted by {post.reaction} people.
</div>
</div>
    );
}

export default Post;