import "./App.css";
import List from "./components/List";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [word, setWord] = useState("");

  return (
    <div className="emoji-search">
      <h1>🚀 Emoji-Search 🚀</h1>
      <Search word={word} setWord={setWord} />
      <p>SCROLL THE LIST</p>
      <List word={word} />
    </div>
  );
}

export default App;
