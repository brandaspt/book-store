import { Component } from "react"
import SingleBook from "../SingleBook/SingleBook"
import { CardGroup, Container, Form } from "react-bootstrap"

class BookList extends Component {
  state = {
    filterQuery: "",
    // filteredBooks: [],
  }

  // filterBooks = () => {
  //   const auxFilteredBooks = this.props.booksArr
  //     .filter(book => book.title.toLowerCase().includes(this.state.filterQuery))
  //     .map(el => <SingleBook key={"asin_" + el.asin} book={el} />)
  //   this.setState({
  //     filteredBooks: auxFilteredBooks.length ? (
  //       auxFilteredBooks
  //     ) : (
  //       <Alert className="align-self-center m-0 justify-self-center" variant="danger">
  //         No results :(
  //       </Alert>
  //     ),
  //   })

  //   console.log(this.state.filteredBooks)
  // }

  render() {
    return (
      <Container fluid="md">
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
                .map(el => <SingleBook key={"asin_" + el.asin} book={el} />)
            : this.props.booksArr.map(el => <SingleBook key={"asin_" + el.asin} book={el} />)}
        </CardGroup>
      </Container>
    )
  }
}

export default BookList
