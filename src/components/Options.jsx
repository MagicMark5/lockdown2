import React, {useState} from "react";
import sceneEvents from "../phaser/utils/SceneEvents";

export default function Options(props) {
  const { remoteOpen } = props;
  const [sound, setSound] = useState(true) // toggle game sound (mute/unmute)

  const toggleSound = () => {
    setSound(!sound);
    sceneEvents.emit("toggle-sound");
  };

  // open/close <Options> from phaser startMenu.js scene
  sceneEvents.on("toggle-options", () => {
    remoteOpen();
  });

  return (
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
        <td>A or ⬅</td>
      </tr>
      <tr>
        <td>Mode</td>
        <td>S or ⬇</td>
      </tr>
    </tbody>
  );
};