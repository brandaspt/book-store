import { Component } from "react"
import SingleBook from "../SingleBook/SingleBook"
import { CardGroup, Container, Form, Row, Col } from "react-bootstrap"
import CommentArea from "../CommentArea/CommentArea"

class BookList extends Component {
  state = {
    filterQuery: "",
    selectedBook: null,
  }

  setSelectedBook = book => {
    this.setState({ selectedBook: book })
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="border-right text-center comments-section" xs={12} sm={6} md={4} lg={3}>
            {this.state.selectedBook ? <CommentArea book={this.state.selectedBook} /> : <p>Select a book to see reviews</p>}
          </Col>
          <Col className="books-section" xs={12} sm={6} md={8} lg={9}>
            <Form className="d-flex justify-content-center mt-4">
              <Form.Group className="m-0">
                <Form.Control
                  type="text"
                  placeholder="Filter books"
                  value={this.state.filterQuery}
                  onChange={e => {
                    this.setState({ filterQuery: e.target.value.toLowerCase() })
                    // console.log(this.state.filterQuery)
                    // this.filterBooks()
                  }}
                />
              </Form.Group>
            </Form>
            <CardGroup className="my-4 justify-content-center">
              {this.state.filterQuery.length > 2
                ? this.props.booksArr
                    .filter(book => book.title.toLowerCase().includes(this.state.filterQuery))
                    .map(el => <SingleBook key={"asin_" + el.asin} book={el} getSelectedBook={this.setSelectedBook} />)
                : this.props.booksArr.map(el => <SingleBook key={"asin_" + el.asin} book={el} getSelectedBook={this.setSelectedBook} />)}
            </CardGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default BookList
