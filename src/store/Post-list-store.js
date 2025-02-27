import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {}
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if(action.type === 'DELETE_POST') {
        newPostList =currPostList.filter((post) => post.id !== action.payload.postId);

    } else if(action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currPostList]
    }
    return newPostList;    
}


const PostListProvider = ( {children} ) => {
    
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);


    const addPost = (userId, postTitle, postBody, reaction, tags) => {
        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(), 
                title: postTitle,
                body: postBody,
                reaction: reaction,
                useId: userId,
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


    return <PostList.Provider value={{
        postList,
        addPost,
        deletePost
    }}>
        {children}
    </PostList.Provider>

};

const DEFAULT_POST_LIST = [
    {
        id: "1", 
        title: "Bhai Phati Padi h coding m",
        body: "Sala compotition itna ho gya h ki samajh nhi aa rha Job lagegi ki nhi",
        reaction: 2,
        useId: "user-8",
        tags: ["Job", "Coding", "Hard Work"]

    },
    {
        id: "2", 
        title: "Jo Hoga Dekha jayega Chill Kar Jani",
        body: "Compotition h to kya hua kuch standout karke dikhana h",
        reaction: 15,
        useId: "user-10",
        tags: ["Motivated", "Asli Hai"]

    }
]

export default PostListProvider;