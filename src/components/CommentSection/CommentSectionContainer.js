// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummydata from "../../dummy-data";

const CommentSection = props => {
  const [comment] = useState(props.comments);
  

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
       {comment && comment.map(data => (
        <Comment key={comment.text}  comment = {data} />
      ))} 
      <CommentInput />
    </div>
  );
};

export default CommentSection;
