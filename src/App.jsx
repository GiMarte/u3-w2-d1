import { useState } from "react";
import Navbear from "./components/Navbear";
import Footer from "./components/Footer";
import WelcomeAlert from "./components/WelcomeAlert";
import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";
import Searchbar from "./components/Searchbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Books from "./assets/scifi.json";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbear></Navbear>
      <Container fluid>
        <Row className="position-relative">
          <Col className="d-none d-md-block">
            <Searchbar
              onSearchChange={setSearchTerm}
              searchedTerm={searchTerm}></Searchbar>
            <AllTheBooks
              onSelectBook={setSelectedBook}
              selectedBook={selectedBook}
              books={Books}
              searchTerm={searchTerm}></AllTheBooks>
          </Col>
          <Col
            xs={12}
            md={6}
            style={{
              position: "sticky",
              top: "0",
              maxHeight: "100vh",
            }}>
            <WelcomeAlert></WelcomeAlert>
            {selectedBook && <SingleBook book={selectedBook} />}
          </Col>
          <Col className="d-block d-md-none">
            <Searchbar
              onSearchChange={setSearchTerm}
              searchedTerm={searchTerm}></Searchbar>
            <AllTheBooks
              onSelectBook={setSelectedBook}
              books={Books}
              searchTerm={searchTerm}></AllTheBooks>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
