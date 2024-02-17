import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Timer from "./Timer";
import Test from "./Test";
import Nav from "./Nav";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Nav />
    </Router>
  );
};

export default AppRoutes;
