import { useState } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentsList from "./CommentsList";

const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addCommentHandler = (comment) => {
    props.onAdd(comment);
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAdd={addCommentHandler} />}
      {props.commentsList.length === 0 && <p>No comments were added yet!</p>}
      <CommentsList comments={props.commentsList} />
    </section>
  );
};

export default Comments;
