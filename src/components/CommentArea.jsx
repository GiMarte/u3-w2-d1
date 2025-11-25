import { useState, useEffect } from "react";
import AddComment from "./AddComment";

const CommentArea = ({ bookAsin }) => {
  /*  state = {
    allComments: [],
  }; */
  const [allComments, setAllComments] = useState([]);

  const getComments = () => {
    const URL = `https://striveschool-api.herokuapp.com/api/comments/${bookAsin}`;
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMGNiZDIzZTc0MDAwMTVmN2ZkYjEiLCJpYXQiOjE3NjM2NDI1NTcsImV4cCI6MTc2NDg1MjE1N30.ryb9HIJgTOdZkIBazr_LWY6sGoYDeuvRjZLQFMM0s2o";
    fetch(URL, {
      headers: {
        Authorization: token,
      },
    })
      .then((r) => {
        if (!r.ok) throw new Error(`Risposta diversa da 200: ${r.status} `);
        return r.json();
      })
      .then((c) => {
        /* this.setState({ allComments: c }); */
        setAllComments(c);
      })
      .catch((e) =>
        console.log("Siamo nell'error, qualcosa e' andato storto", e)
      );
  };
  /*   componentDidMount() {
    this.getComments();
  } */
  /* componentDidUpdate(prevProps) {
    if (prevProps.bookAsin !== this.props.bookAsin) {
      this.getComments();
    }
  } */

  useEffect(() => {
    getComments();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookAsin]);

  return (
    <>
      {allComments.map((el) => {
        return (
          <p key={el._id}>
            {el.author} | {el.comment}
          </p>
        );
      })}
      <AddComment
        book={bookAsin}
        onCommentAdded={() => getComments()}></AddComment>
    </>
  );
};

export default CommentArea;
