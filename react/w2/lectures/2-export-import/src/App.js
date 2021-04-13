import "./App.css";
import wattagattabustberry from "./lecture/export";
import { msg } from "./lecture/export";

function App() {
  return (
    <div className="App">
      <h1>Sup everyone :)</h1>
      <h3>{msg}</h3>
      <h3>{wattagattabustberry()}</h3>
    </div>
  );
}

export default App;
