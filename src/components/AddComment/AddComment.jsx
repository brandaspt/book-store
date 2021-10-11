import { Component } from "react"
import { Alert, Form, Button, Spinner } from "react-bootstrap"

const URL = "https://striveschool-api.herokuapp.com/api/comments/"
const TOKEN = process.env.REACT_APP_API_TOKEN

class AddComment extends Component {
  state = {
    newComment: {
      comment: "",
      rate: 1,
      elementId: "",
    },
    isLoading: false,
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
    const payload = { ...this.state.newComment, elementId: this.props.bookAsin }
    this.setState({ isLoading: true })
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
      this.setState({ isLoading: false })
      this.props.refresh()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <>
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
          <div className="d-flex justify-content-start align-items-center">
            <Button className="mx-auto" variant="primary" type="submit">
              Submit
            </Button>
            {this.state.isLoading && <Spinner animation="border" variant="info" />}
          </div>
        </Form>
      </>
    )
  }
}

export default AddComment
