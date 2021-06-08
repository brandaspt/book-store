import { Component } from "react"
import { ListGroup, Alert } from "react-bootstrap"
import SingleComment from "../SingleComment/SingleComment"

class CommentList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.comments.length === 0 ? (
          <Alert className="text-center mx-auto" variant="danger">
            No reviews
          </Alert>
        ) : (
          this.props.comments.map(comment => <SingleComment key={comment._id} comment={comment} />)
        )}
      </ListGroup>
    )
  }
}

export default CommentList
