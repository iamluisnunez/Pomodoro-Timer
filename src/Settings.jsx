import { useContext } from "react";
import Slider from "react-slick";
import ReactSlider from "react-slider";
import BackButton from "./BackButton";
import SettingsContext from "./SettingsContext";

const Settings = () => {
  const settingsInfo = useContext(SettingsContext);
  return (
    <>
      <div className="settings-page">
        <label class="slider-label" htmlFor="WorkMins">
          Work Minutes {settingsInfo.workMinutes}:00
        </label>
        <ReactSlider
          className="react-slider"
          thumbClassName="thumb"
          trackClassName="track"
          value={settingsInfo.workMinutes}
          onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
          min={1}
          max={120}
        />
        <label class="slider-label" htmlFor="BreakMinutes">
          Break Minutes {settingsInfo.breakMinutes}:00
        </label>
        <ReactSlider
          className="react-slider green"
          thumbClassName="thumb"
          trackClassName="track"
          value={settingsInfo.breakMinutes}
          onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
          min={1}
          max={120}
        />
        <div className="back-button-container">
          <BackButton
            onClick={() => {
              settingsInfo.setShowSettings(false);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Settings;
