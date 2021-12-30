import React, { useState } from "react";
import "./App.css";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
function App() {
  const [search, setSearch] = useState("");
  const [counts] = useState([
    {
      count:"1",
      id: "fjkd1",
    },
    {
      count:"2",
      id: "fjkd2",
    },
    {
      count:"3",
      id: "fjkd3",
    },
    {
      count:"4",
      id: "fjkd4",
    },
    {
      count:"5",
      id: "fjkd5",
    },
    {
      count:"6",
      id: "fjkd6",
    },
  ]);
  const setSearchField = (e) => {
    setSearch({search: e.target.value});
  };
  const newCounts = counts.filter( (item) => item.count.includes(search.search.toString()));
  return (
    <>
      <SearchBox setSearchField={setSearchField}/>
      <div className="App">
      {search ?
        <CardList counts={newCounts} />
        :
        <CardList counts={counts} />
      }
      </div>
    </>
  );
}

export default App;
