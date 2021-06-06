import React, { useState } from "react";
import Family from "./Family";

function Deshboard() {
  let [members, setMember] = useState([
    {
      name: "himanshu",
      email: "himanshu@gmail.com",
    },
    {
      name: "deven",
      email: "deven@gmail.com",
    },
  ]);
  const addmember = (newmember) => {
    console.log(newmember);
    setMember([...members, newmember]);
  };
  const memberList = () => {
    return members.map((mab) => {
      return (
        <div>
          <h1>{mab.name}</h1>
          <p>{mab.email}</p>
        </div>
      );
    });
  };
  return (
    <div class="container mx-auto">
      <button> Add member </button>
      <button> Task List </button>
      <Family members={members} addmember={addmember} />
      {memberList()}
    </div>
  );
}

export default Deshboard;
