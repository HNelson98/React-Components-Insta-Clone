//Complete the necessary code in this file
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummydata from "../../dummy-data";


const PostsPage = () => {
  const [data] = useState(dummydata);


  return (
    <div className="posts-container-wrapper">
      {data.map(data =>(
        <Post key={data.username} post={data} />
      ))}
    </div>
  );
};

export default PostsPage;

