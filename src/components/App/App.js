import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "../WarningSign/WarningSign"
import MyBadge from "../MyBadge/MyBadge"
import BookList from "../BookList/BookList"
import fantasyBooks from "../../data/fantasy.json"

function App() {
  return (
    <div className="App">
      <WarningSign message="Hello World!" />
      <MyBadge text="Hello there!" color="dark" />
      <BookList booksArr={fantasyBooks} />
    </div>
  )
}

export default App
