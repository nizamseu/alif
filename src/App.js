import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
