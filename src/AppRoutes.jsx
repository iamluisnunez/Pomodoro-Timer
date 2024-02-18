import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Timer from "./Timer";
import Test from "./Test";
import Nav from "./Nav";
import SettingsContext from "./SettingsContext";
import { useState } from "react";

const AppRoutes = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(25);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Nav />
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </Router>
  );
};

export default AppRoutes;
