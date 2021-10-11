import { Component } from "react"
import { Alert, Spinner } from "react-bootstrap"
import AddComment from "../AddComment/AddComment"
import CommentList from "../CommentList/CommentList"

const URL = "https://striveschool-api.herokuapp.com/api/comments/"
const TOKEN = process.env.REACT_APP_API_TOKEN

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
  }

  componentDidMount = () => {
    this.fetchComments()
  }

  componentDidUpdate = prevProps => {
    if (this.props.book.asin !== prevProps.book.asin) this.fetchComments()
  }

  fetchComments = async () => {
    const asin = this.props.book.asin
    const response = await fetch(URL + asin, {
      headers: {
        Authorization: "Bearer " + TOKEN,
      },
    })
    this.setState({
      comments: await response.json(),
      isLoading: false,
    })
  }

  render() {
    return (
      <>
        <Alert className="text-center fs-4" variant="info">
          <p className="m-0">Reviews for: {this.props.book.title}</p>
        </Alert>
        {this.state.isLoading && <Spinner animation="border" variant="info" />}
        <CommentList comments={this.state.comments} />
        <AddComment bookAsin={this.props.book.asin} refresh={this.fetchComments} />
      </>
    )
  }
}

export default CommentArea
