import React from "react";
import { useState } from "react";

function Family(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const createmember = (e) => {
    e.preventDefault();
    const family = {
      name,
      email,
    };
    return props.addmember(family);
  };

  return (
    <div>
      <form onSubmit={createmember}>
        <label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </label>
        <label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </label>
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}

export default Family;