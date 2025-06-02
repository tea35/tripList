import { useContext } from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Checklist from "./pages/checklist/Checklist";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checklist" element={<Checklist />} />
      </Routes>
    </Router>
  );
}

export default App;
