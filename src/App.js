import "./styles.css";

export default function App() {
  let delayTimer;

  const doSearch = (text) => {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function () {
      alert(text);
    }, 3000); // Will do the ajax stuff after 3000 ms, or 3 s
  };

  return (
    <div className="App">
      <input onChange={(event) => doSearch(event.target.value)} />
    </div>
  );
}
