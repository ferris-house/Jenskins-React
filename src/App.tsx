import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <div data-testid="add" onClick={() => setNum(num + 1)}>
        {num}
      </div>
    </div>
  );
}

export default App;
