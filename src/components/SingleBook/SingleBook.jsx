import { Component } from "react"
import { Card, Button, Badge, Col } from "react-bootstrap"

import "./SingleBook.css"

class SingleBook extends Component {
  state = {
    selected: false,
  }

  // selectBook = () => {
  //   document.querySelectorAll(".card").forEach(card => card.classList.remove("selected"))

  //   console.log(this.state.selected)
  //   this.state.selected.classList.add("selected")
  // }

  componentDidMount = () => {
    this.setState({ asin: this.props.book.asin })
  }

  render() {
    return (
      <>
        <Col sm={12} md={6} lg={4} xl={3}>
          <Card
            className={`my-3 ${this.state.selected ? "selected" : ""}`}
            onClick={() => {
              console.log(this.props.book.asin)
              this.props.getSelectedBook(this.props.book)
            }}
          >
            <Card.Img className="img-fluid" variant="top" src={this.props.book.img} />
            <Card.Body className="text-center">
              <Card.Title>{this.props.book.title}</Card.Title>

              <div className="d-flex justify-content-between align-items-center">
                <Button variant="primary">Buy</Button>
                <Badge pill variant="warning">
                  ${this.props.book.price}
                </Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </>
    )
  }
}

export default SingleBook
