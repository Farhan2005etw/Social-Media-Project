import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/Post-list-store";


const Post = ({post}) => {

const {deletePost} = useContext(PostList);

    return(
        <div className="card post-card" style={{width: "30rem"}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}

    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete" 
    onClick={() => deletePost(post.id)}>
    <MdDelete />

  </span>
    </h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tags) => (<span key={tags} className="badge text-bg-primary tag">{tags}</span>))}
    
  </div>

  <div className="alert alert-success reactions" role="alert">
  This post got Likes: {post.reactions.likes} & Dislikes: {post.reactions.dislikes} by people.
</div>
</div>
    );
}

export default Post;