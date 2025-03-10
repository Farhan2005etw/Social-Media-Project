import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
    postList: [],
    fetching: false,
    addPost: () => {},
    deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if(action.type === 'DELETE_POST') {
        newPostList =currPostList.filter((post) => post.id !== action.payload.postId);

    } else if(action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currPostList]
    } else if (action.type === 'ADD_INITIAL_POSTS') {
        newPostList = action.payload.posts;
    }
    return newPostList;    
}


const PostListProvider = ( {children} ) => {
    
    const [postList, dispatchPostList] = useReducer(postListReducer, []);
    const [fetching, setFetching] = useState(false)


    
  


    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: tags,
            }
        })


    };

    const deletePost = (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId,
            }
        })
    }

    const addInitialPosts = (posts) => {
        dispatchPostList({
            type: 'ADD_INITIAL_POSTS',
            payload: {
                posts
            }
        })


    };

    
    useEffect( () => {
        setFetching(true)    
      fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(data => {
        addInitialPosts(data.posts)
        setFetching(false)
      });
        
      }, []) 
    
    


    return <PostList.Provider value={{
        postList,
        addPost,
        deletePost,
        fetching
        
    }}>
        {children}
    </PostList.Provider>

};


export default PostListProvider;