import { Component } from "react"
import { Jumbotron, Button } from "react-bootstrap"
import "./welcome.css"

class Welcome extends Component {
  state = {}
  render() {
    return (
      <Jumbotron className="text-center rounded-0">
        <h1>All You Need Is Books</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quis similique aperiam molestias esse! Ratione veritatis quis
          quisquam molestiae quas.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    )
  }
}

export default Welcome
