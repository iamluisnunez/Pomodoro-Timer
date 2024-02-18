import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Timer from "./Timer";
import Nav from "./Nav";
import Settings from "./Settings";
import SettingsContext from "./SettingsContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./Test";
import AppRoutes from "./AppRoutes";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(25);

  return (
    <>
      <main>
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
      </main>
    </>
  );
}

export default App;
