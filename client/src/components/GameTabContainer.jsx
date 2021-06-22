import React, {useState} from "react";
// Child Components
import Controls from "./Controls.jsx";
import Highscores from "./Highscores.jsx";
import Options from "./Options.jsx";
import UserForm from "./UserForm.jsx";
// Phaser events
import sceneEvents from "../phaser/utils/SceneEvents.js";

/* Container component for each sidetab */ 

export default function GameTabContainer(props) {
  const { captionText, scores } = props;
  const [open, setOpen] = useState(false); 

  // Click handler to toggle open state on box caption
  const openBox = () => setOpen(!open);

  // gameTabs object will point to appropriate content
  // based on captionText string as key
  const gameTabs = {
    "Controls": <Controls />,
    "Highscores": <Highscores scores={scores} />,
    "Options": <Options remoteOpen={openBox}/>,
    "Log In": <UserForm />
  };
  // Add to gameTabs object with title of component as key


  const tableClassNames = `sidetab ${open ? "open" : "closed"}`;

  return (
    <table className={tableClassNames}>
      <caption className="box-title" onClick={openBox}>{captionText}</caption>
      {gameTabs[captionText]}
    </table>
  );
};
