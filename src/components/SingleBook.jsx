import CommentArea from "./CommentArea";

const SingleBook = ({ book }) => {
  return (
    <div className="single-book text-center">
      <h2>{book.title}</h2>
      <img src={book.img} alt={book.title} height={200} width={100} />
      <CommentArea bookAsin={book.asin}></CommentArea>
    </div>
  );
};

export default SingleBook;
