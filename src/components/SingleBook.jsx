import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  render() {
    return (
      <div className="single-book text-center">
        <h2>{this.props.book.title}</h2>
        <img
          src={this.props.book.img}
          alt={this.props.book.title}
          height={200}
          width={100}
        />
        <CommentArea book={this.props.book.asin}></CommentArea>
      </div>
    );
  }
}

export default SingleBook;
