import { Component } from "react";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    allComments: [],
  };
  getComments = () => {
    const URL = `https://striveschool-api.herokuapp.com/api/comments/${this.props.book}`;
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
        this.setState({ allComments: c });
        console.log(c);
      })
      .catch((e) =>
        console.log("Siamo nell'error, qualcosa e' andato storto", e)
      );
  };
  componentDidMount() {
    this.getComments();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.book !== this.props.book) {
      this.getComments();
    }
  }

  render() {
    return (
      <>
        {this.state.allComments.map((el) => {
          return (
            <p key={el._id}>
              {el.author} | {el.comment}
            </p>
          );
        })}
        <AddComment
          book={this.props.book}
          onCommentAdded={() => this.getComments()}></AddComment>
      </>
    );
  }
}

export default CommentArea;
