import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "../MyNav/MyNav"
import MyFooter from "../MyFooter/MyFooter"
import CategoriesTabs from "../CategoriesTabs/CategoriesTabs"

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
      <MyNav />
      <main>
        <CategoriesTabs categories={categoriesArr} allBooks={books} />
      </main>
      <MyFooter />
    </div>
  )
}

export default App
