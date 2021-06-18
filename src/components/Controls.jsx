import React, {useState} from "react";

export default function Controls(props) {
  const [open, setOpen] = useState(false); 

  const classNames = `controls sidetab ${open ? "expanded" : "closed"}`;

  return (
    <table className={classNames}>
      <caption className="box-title" onClick={() => setOpen(!open)}>Controls</caption>
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