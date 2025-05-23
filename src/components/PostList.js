import React, { useContext} from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import WelconmMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

 

  
  return (
    <>
    {fetching && <LoadingSpinner/>}
      {!fetching && postList.length === 0 && (
        <WelconmMessage  />
      )}
      {!fetching && postList.map((post) => (
        <Post key={post.title} post={post} />
      ))}
    </>
  );
};

export default PostList;
