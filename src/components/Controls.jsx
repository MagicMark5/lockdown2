import React from "react";

export default function Controls(props) {

  return (
    <table className="controls sidetab">
        <caption className="box-title">Controls</caption>
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