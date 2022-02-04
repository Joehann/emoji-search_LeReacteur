import emojiList from "../assets/datas/emojis.json";
const List = ({ word }) => {
  const handleCopy = (event) => {
    const iconToCopy = event.target.querySelector(".icon").innerHTML;
    navigator.clipboard.writeText(iconToCopy);
  };
  return (
    <ul>
      {emojiList
        .filter((elem) => elem.keywords.includes(word.toLowerCase()))
        .map((item, index) => (
          <li key={index} onClick={handleCopy}>
            <div>
              <span className="icon">{item.symbol}</span>
              {item.title}
            </div>
            <div className="copy">Click to copy !</div>
          </li>
        ))}
    </ul>
  );
};

export default List;
