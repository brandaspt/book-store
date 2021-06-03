import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "../WarningSign/WarningSign"
import MyBadge from "../MyBadge/MyBadge"
import CategoriesTabs from "../CategoriesTabs/CategoriesTabs"
// import BookList from "../BookList/BookList"
import fantasyBooks from "../../data/fantasy.json"
import historyBooks from "../../data/history.json"
import horrorBooks from "../../data/horror.json"
import romanceBooks from "../../data/romance.json"
import scifiBooks from "../../data/scifi.json"

const categoriesArr = ["Fantasy", "History", "Horror", "Romance", "Scifi"]
const books = [fantasyBooks, historyBooks, horrorBooks, romanceBooks, scifiBooks]

function App() {
  return (
    <div className="App">
      <WarningSign message="Hello World!" />
      <MyBadge text="Hello there!" color="dark" />
      <CategoriesTabs categories={categoriesArr} allBooks={books} />
      {/* <BookList booksArr={fantasyBooks} /> */}
    </div>
  )
}

export default App
