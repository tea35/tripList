import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TripList from "./pages/tripList/TripList";
import Createtrip from "./pages/createtrip/Createtrip";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TripList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createtrip" element={<Createtrip />} />
        <Route path="/tripList" element={<TripList />} />
      </Routes>
    </Router>
  );
}

export default App;
