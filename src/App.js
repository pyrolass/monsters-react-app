import "./App.css";
import { useEffect, useState } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

function App() {
  const [monsters, setMonster] = useState([]);
  const [searchField, search] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonster(users));
  }, []);

  const filteredMonster = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      {/* <input
        type="search"
        placeholder="search monsters"
        onChange={(e) => search(e.target.value)}
      /> */}
      <h1>Monsters Roledex</h1>
      <SearchBox
        placeholder="search monsters"
        handleChange={(e) => search(e.target.value)}
      />
      <CardList monsters={filteredMonster} />
    </div>
  );
}

export default App;
