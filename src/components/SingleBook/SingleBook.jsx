import { Card, Button } from "react-bootstrap"

const SingleBook = props => {
  return (
    <Card className="my-3">
      <Card.Img className="img-fluid" variant="top" src={props.book.img} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>{props.book.category.toUpperCase()}</Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
