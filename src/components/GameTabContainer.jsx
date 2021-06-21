import React, {useState} from "react";
import Controls from "./Controls.jsx";
import Highscores from "./Highscores.jsx";

export default function GameTabContainer(props) {
  const { captionText, scores } = props;
  const [open, setOpen] = useState(false); 

  // Click handler to toggle open state on box caption
  const openBox = () => setOpen(!open);

  // gameTabs object will point to appropriate content
  // based on captionText string as key
  const gameTabs = {
    "Controls": <Controls />,
    "Top Scores": <Highscores scores={scores} />
  }


  const tableClassNames = `sidetab ${open ? "open" : "closed"}`;

  return (
    <table className={tableClassNames}>
      <caption className="box-title" onClick={openBox}>{captionText}</caption>
      {gameTabs[captionText]}
    </table>
  );
};
