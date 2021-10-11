import { Component } from "react"
import { ListGroup, Button } from "react-bootstrap"

const URL = "https://striveschool-api.herokuapp.com/api/comments/"
const TOKEN = process.env.REACT_APP_API_TOKEN

class SingleComment extends Component {
  state = {
    isLoading: false,
    isDeleted: false,
  }
  deleteComment = async commentId => {
    this.setState({ isLoading: true })
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
      this.setState({ isLoading: false })
      this.setState({ isDeleted: true })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    if (this.state.isDeleted) return null
    return (
      <ListGroup.Item className="px-0">
        <p className="m-0">
          <strong>Comment: </strong>
          {this.props.comment.comment}
        </p>
        <p>
          <strong>Rating: </strong>
          {this.props.comment.rate}
        </p>
        <p>
          <strong>Author: </strong>
          {this.props.comment.author}
        </p>
        <Button
          className="btn-sm"
          variant="danger"
          onClick={() => {
            this.deleteComment(this.props.comment._id)
          }}
        >
          Delete
        </Button>
      </ListGroup.Item>
    )
  }
}

export default SingleComment
