import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import createTodo from "./pages/createtodo";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/create" element={<createTodo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
