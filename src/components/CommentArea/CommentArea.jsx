import { Component } from "react"
import { ListGroup, Form, Button, Alert } from "react-bootstrap"

const URL = "https://striveschool-api.herokuapp.com/api/comments/"
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNTk2NGNlYWY0ODAwMTVjOTE5MzYiLCJpYXQiOjE2MjIwMzg4ODQsImV4cCI6MTYyMzI0ODQ4NH0.kcSw_K1mFlUoMMV0Ht3yenaWNHGapnpFfnPfWPee6cU"

class CommentArea extends Component {
  state = {
    comments: [],
    newComment: {
      comment: "",
      rate: 1,
      elementId: "",
    },
  }

  handleInput = e => {
    this.setState({
      newComment: {
        ...this.state.newComment,
        [e.target.id]: e.target.value,
      },
    })
    console.log(e.currentTarget.id)
  }

  submitComment = async e => {
    e.preventDefault()
    const payload = { ...this.state.newComment, elementId: this.props.book.asin }
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + TOKEN,
        },
        body: JSON.stringify(payload),
      })
      console.log(response)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  deleteComment = async commentId => {
    try {
      const response = await fetch(URL + commentId, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + TOKEN,
        },
      })
      console.log(response)
      const data = await response.json()
      console.log(data)
      const indexRemoved = this.state.comments.findIndex(comment => comment._id === data._id)
      await this.setState({
        comments: [...this.state.comments.slice(0, indexRemoved), ...this.state.comments.slice(indexRemoved + 1)],
      })
      console.log(this.state.comments)
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount = async () => {
    const asin = this.props.book.asin
    const response = await fetch(URL + asin, {
      headers: {
        Authorization: "Bearer " + TOKEN,
      },
    })
    this.setState({ comments: await response.json() })
  }
  render() {
    return (
      <>
        <Alert className="text-center fs-4" variant="info">
          <h4>Reviews for: {this.props.book.title}</h4>
        </Alert>

        <ListGroup>
          {this.state.comments.length === 0 ? (
            <Alert className="text-center" variant="warning">
              No reviews
            </Alert>
          ) : (
            this.state.comments.map(comment => (
              <ListGroup.Item key={comment._id}>
                <p>
                  <strong>Comment: </strong>
                  {comment.comment}
                </p>
                <p>
                  <strong>Rating: </strong>
                  {comment.rate}
                </p>
                <p>
                  <strong>Author: </strong>
                  {comment.author}
                </p>
                <Button
                  className="btn-sm"
                  variant="danger"
                  onClick={() => {
                    this.deleteComment(comment._id)
                  }}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
        <Alert className="text-center mt-4" variant="warning">
          Add a review
        </Alert>
        <Form onSubmit={this.submitComment}>
          <Form.Group className="mb-3">
            <Form.Label>Comment</Form.Label>
            <Form.Control id="comment" as="textarea" rows={3} value={this.state.newComment.comment} onChange={this.handleInput} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rating:</Form.Label>
            <Form.Control id="rate" type="number" min={1} max={5} value={this.state.newComment.rate} onChange={this.handleInput} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    )
  }
}

export default CommentArea
