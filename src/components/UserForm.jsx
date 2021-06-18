import React, {useState} from "react";

export default function UserForm(props) {
  const [open, setOpen] = useState(false); 

  const classNames = `controls sidetab ${open ? "expanded" : "closed"}`;

  return (
    <form className="sidetab">
      <label>Username</label>
      <input name="username" type="text"></input>
      <label>Email</label>
      <input name="email" type="text"></input>
      <label>Password</label>
      <input name="password" type="password"></input>
    </form>
  );
};