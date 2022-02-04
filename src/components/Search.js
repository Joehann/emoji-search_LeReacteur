const Search = ({ word, setWord }) => {
  const handleChangeWord = (event) => {
    // console.log(event.target.value);
    setWord(event.target.value);
  };

  return (
    <input
      type="text"
      className="search-input"
      placeholder="Which Emoji are you looking for ?"
      onChange={handleChangeWord}
      value={word}
    />
  );
};

export default Search;
