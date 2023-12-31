import Post from "../Post/index";
import { AllPosts, Users } from "../../data";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

import "./index.css";
import { useState, useEffect } from "react";

const Posts = () => {
  // console.log(AllPosts);
  const [postsList, setPostsList] = useState([]);
  const collectionRef = collection(db, "Posts");

  useEffect(() => {
    const getPosts = async () => {
      const dataList = await getDocs(collectionRef);
      setPostsList(dataList.docs.map((doc) => ({...doc.data(),id:doc.id})));
      // console.log(dataList);
    };
    getPosts();
  }, []);
// console.log(postsList);
  return (
    <div className="posts">
      {postsList.map((post) => {
        console.log(post);
        // const user = Users.find((user) => user.id === post.userId);

        return <Post post={post} key={post.id} />;
        // user={user}
      })}
    </div>
  );
};

export default Posts;
