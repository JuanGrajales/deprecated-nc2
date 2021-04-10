import "./App.css";
import Comp1 from "./components/Comp1";
let userLoggedIn = true;
function App() {
  return (
    <div className="App">
      <h1>Let's make components</h1>
      {userLoggedIn ? <Comp1 /> : "Login"}
    </div>
  );
}

export default App;
