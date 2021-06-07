import { Component } from "react"
import { Container } from "react-bootstrap"
import rbsLogo from "../../rbsLogo.svg"

class MyFooter extends Component {
  state = {}
  render() {
    return (
      <Container className="bg-dark py-2 text-center" fluid>
        <img alt="" src={rbsLogo} width="60" height="60" className="d-inline-block align-top" /> {this.props.shopName}
        {/* <Row>
          <Col className="text-center d-flex align-items-center justify-content-center" md={4}>
            <img alt="" src={rbsLogo} width="60" height="60" className="d-inline-block align-top" /> {this.props.shopName}
          </Col>
          <Col md={4}>
            <ul className="m-0 py-4 py-md-0 h-100 text-muted list-unstyled justify-content-center align-items-center flex-wrap d-none">
              <li className="px-2">Link 1</li>
              <li className="px-2">Link 2</li>
              <li className="px-2">Link 3</li>
              <li className="px-2">Link 4</li>
              <li className="px-2">Link 5</li>
              <li className="px-2">Link 6</li>
              <li className="px-2">Link 7</li>
              <li className="px-2">Link 8</li>
              <li className="px-2">Link 9</li>
            </ul>
          </Col>
          <Col md={4}>
            <Navbar className="justify-content-center d-none" bg="dark" variant="dark" expand="lg">
              <Nav>
                <Nav.Link className="p-0" href="#">
                  Home
                </Nav.Link>
                <Nav.Link className="p-0" href="#">
                  About
                </Nav.Link>
                <Nav.Link className="p-0" href="#">
                  Browse
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>
        </Row> */}
      </Container>
    )
  }
}

export default MyFooter
