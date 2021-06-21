import React, {useState} from "react";
import sceneEvents from "../phaser/utils/SceneEvents";

export default function Options(props) {
  const { remoteOpen } = props;
  // Sound can be toggled at any time
  // Thus it is not submitted with save button click
  const [sound, setSound] = useState(true); // toggle game sound (mute/unmute)
  const [options, setOptions] = useState({
    disabled: true,
    avatar: "player-m", // set avatar with textureKey string from phaser
    gameMode: "normal" // normal difficulty default
  }); // options cannot be chaged unless player is in startMenu scene

  const toggleSound = () => {
    setSound(!sound);
    sceneEvents.emit("toggle-sound");
  };

  // select onChange handler for avatar selection
  const selectChange = (event) => {
    setOptions({
      ...options, 
      avatar: event.target.value 
    });
  }

  
  /* --- Phaser <-> React event listeners and emitters --- */
  
  // open/close <Options/> container
  // when <Options> is clicked from the Phaser startMenu.js scene
  sceneEvents.on("toggle-options", () => {
    remoteOpen();
  });

  sceneEvents.on("toggle-enable-options", () => {
    // Disable save, avatar, and mode elements if not on startMenu screen
    setOptions({
      ...options, 
      disabled: !options.disabled
    })
  })

  // Emit save-options event on Save button click
  const saveOptions = () => {
    sceneEvents.emit("save-options", options);
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
            <select 
              className="option-select" 
              name="avatar" 
              onChange={selectChange}
              value={options.avatar}
              disabled={options.disabled}
              >
              <option id="male" value="player-m">
                Boy
              </option>
              <option id="female" value="player-f">
                Girl
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
            <button 
              onClick={saveOptions}
              disabled={options.disabled}
              >
              Save
            </button>
          </td>
        </tr>
      </tfoot>
    </>
  );
};