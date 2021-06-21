import React, {useState} from "react";
import sceneEvents from "../phaser/utils/SceneEvents";

export default function Options(props) {
  const { remoteOpen } = props;
  // Sound can be toggled at any time
  // So it is not submitted with save button click
  const [sound, setSound] = useState(true); // toggle game sound (mute/unmute)
  const [options, setOptions] = useState({
    avatar: "player-f", // set avatar with textureKey string from phaser
    gameMode: "normal" // normal difficulty default
  }); // options cannot be chaged unless player is in startMenu scene

  const toggleSound = () => {
    setSound(!sound);
    sceneEvents.emit("toggle-sound");
  };

  // open/close <Options> from phaser startMenu.js scene
  sceneEvents.on("toggle-options", () => {
    remoteOpen();
  });

  const saveOptions = () => {
    // Emit save-options event on Save button click
    sceneEvents.emit("save-options", options);
    // Disable save button if not on startMenu screen
  };


  return (
    <>
      <tbody>
        <tr>
          <td>Sound</td>
          <td>
            <input 
              type="checkbox" 
              name="sound"  
              onClick={toggleSound}  
              defaultChecked={sound}
            />
          </td>
        </tr>
        <tr>
          <td>Avatar</td>
          <td>
            <select className="option-select" name="avatar">
              <option id="male" value="player-m">
                Male
              </option>
              <option id="female" value="player-f">
                Female
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Mode</td>
          <td>
          <select 
            className="option-select" 
            name="gameMode" 
            defaultValue="normal" 
            disabled>
              <option id="easy" value="easy">
                Easy
              </option>
              <option id="normal" value="normal">
                Normal
              </option>
              <option id="hard" value="hard">
                Hard
              </option>
            </select>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>
            <span>-----</span>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={saveOptions}>Save</button>
          </td>
        </tr>
      </tfoot>
    </>
  );
};