import React, {useState} from "react";

export default function GameTabContainer(props) {
  const [open, setOpen] = useState(false); 

  const openBox = () => setOpen(!open);

  const classNames = `controls sidetab ${open ? "open" : "closed"}`;

  return (
    <table className={classNames}>
      <caption className="box-title" onClick={openBox}>Controls</caption>
      <tbody>
        <tr>
          <td>Up</td>
          <td>W or ⬆</td>
        </tr>
        <tr>
          <td>Left</td>
          <td>A or ⬅</td>
        </tr>
        <tr>
          <td>Down</td>
          <td>S or ⬇</td>
        </tr>
        <tr>
          <td>Right</td>
          <td>D or ➡</td>
        </tr>
        <tr>
          <td>Shoot</td>
          <td>Space</td>
        </tr>
      </tbody>
    </table>
  );
};
