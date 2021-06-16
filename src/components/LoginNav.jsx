import React, {useState, useEffect} from "react";
import sceneEvents from "../phaser/utils/SceneEvents";

export default function LoginNav(props) {
	

  return (
    <nav>
      <ul className="login navigation">
        <li>Log in</li>
        <li>Create Account</li>
      </ul>
    </nav>
  );
}