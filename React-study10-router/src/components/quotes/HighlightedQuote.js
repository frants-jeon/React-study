import { useState } from "react";
import { Route, useParams, Link } from "react-router-dom";
import Comments from "../comments/Comments";
import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  const params = useParams();
  const [commentsList, setCommentsList] = useState([]);

  const addCommentHandler = (comment) => {
    console.log("addCommentsHandler", comment);
    setCommentsList((prevList) => {
      if (prevList.length === 0) return [...prevList, { id: 1, text: comment }];
      const lastId = prevList[prevList.length - 1].id;
      return [...prevList, { id: lastId + 1, text: comment }];
    });
  };

  return (
    <div>
      <figure className={classes.quote}>
        <p>{props.text}</p>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Route path={"/quotes/:quoteId"} exact>
        <Link to={`/quotes/${props.id}/comments`} className="centered">
          Load Comments
        </Link>
      </Route>
      <Route path={`/quotes/${params["quoteId"]}/comments`}>
        <Comments onAdd={addCommentHandler} commentsList={commentsList} />
      </Route>
    </div>
  );
};

export default HighlightedQuote;
