import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";

const AddComment = ({ book, onCommentAdded }) => {
  /*  state = {
    author: "",
    comment: "",
    rate: 1,
  }; */
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    postComments();
  };

  const postComments = () => {
    const URL = "https://striveschool-api.herokuapp.com/api/comments/";
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMGNiZDIzZTc0MDAwMTVmN2ZkYjEiLCJpYXQiOjE3NjM2NDI1NTcsImV4cCI6MTc2NDg1MjE1N30.ryb9HIJgTOdZkIBazr_LWY6sGoYDeuvRjZLQFMM0s2o";

    const newComment = {
      comment: comment,
      rate: rate,
      author: author,
      elementId: book,
    };

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(newComment),
    })
      .then((r) => {
        if (!r.ok) throw new Error("Errore nel POST");
        return r.json();
      })
      .then(() => {
        /*   this.props.onCommentAdded(); */
        onCommentAdded();
        /*  this.setState({ author: "", comment: "", rate: 1 }); */
        setAuthor("");
        setComment("");
        setRate(1);
      })
      .catch((e) => console.log("Errore:", e));
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-5">
      <Row className="mb-3 flex-column align-items-center g-4">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Author</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Username"
            value={author}
            onChange={(e) => {
              /*   this.setState({ author: e.target.value }); */
              setAuthor(e.target.value);
            }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            required
            type="text"
            value={comment}
            placeholder="This was amazing!"
            onChange={(e) => {
              /* this.setState({ comment: e.target.value }); */
              setComment(e.target.value);
            }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Rate 1/5</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="1"
            value={rate}
            min={1}
            max={5}
            onChange={(e) => {
              /*  this.setState({ rate: Number(e.target.value) }); */
              setRate(Number(e.target.value));
            }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
  );
};

export default AddComment;
