import { Component } from "react"
import { Tabs, Tab } from "react-bootstrap"
import "./CategoriesTabs.css"
import BookList from "../BookList/BookList"

class CategoriesTabs extends Component {
  render() {
    return (
      <Tabs className="justify-content-center bg-warning" defaultActiveKey={this.props.categories[0].toLowerCase()}>
        {this.props.categories.map((category, i) => (
          <Tab key={category} eventKey={category.toLowerCase()} title={category}>
            <BookList booksArr={this.props.allBooks.find(arr => arr[0].category === category.toLowerCase())} />
          </Tab>
        ))}

        {/* <BookList key={"cat_"+booksArr[0].category} booksArr={booksArr}/> */}
      </Tabs>
    )
  }
}

export default CategoriesTabs
