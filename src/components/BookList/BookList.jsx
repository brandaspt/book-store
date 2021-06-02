import { Component } from "react"
import SingleBook from "../SingleBook/SingleBook"
import { CardGroup, Col, Container, Form } from "react-bootstrap"

class BookList extends Component {
  state = {
    filterQuery: "",
  }

  filterBookList = e => {
    console.log(this.props.booksArr.filter(book => book.title.toLowerCase().includes(this.state.filterQuery)))
  }

  render() {
    return (
      <Container fluid="md">
        <Form className="d-flex justify-content-center my-5">
          <Form.Group className="m-0">
            <Form.Control
              type="text"
              placeholder="Filter books"
              value={this.state.filterQuery}
              onChange={e => {
                this.setState({ filterQuery: e.target.value.toLowerCase() })
                if (this.state.filterQuery.length > 2) this.filterBookList()
              }}
            />
          </Form.Group>

          {/* <Button className="ml-2" variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
        <CardGroup className="my-4">
          {this.props.booksArr.slice(0, 10).map(el => (
            <Col key={"asin_" + el.asin} sm={6} md={4} lg={3}>
              <SingleBook book={el} />
            </Col>
          ))}
        </CardGroup>
      </Container>
    )
  }
}

export default BookList
