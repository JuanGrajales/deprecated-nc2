import "./App.css";
let str = "hi";
let userLoggedIn = true;
function App() {
  return (
    <div className="App">
      <h1>What is JSX?</h1>
      <p>
        Pretty much looks like HTML except that you can embed JS inside of it
      </p>
      str + " everyone"
      <div>str variable = {str + " everyone"}</div>
      <div>{5 > 1 ? " true" : " false"}</div>
      <div>{userLoggedIn ? "display account balance" : "Login"}</div>
    </div>
  );
}

export default App;
