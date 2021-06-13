import React from "react";
import Memberlist from "./Memberlist";
import Createmember from "./Createmember";

function Family(props) {
  return (
    <>
      <div className="flex flex-col w-1/2  items-center p-4 rounded-lg bg-gray-100 m-1 overflow-y-auto">
        <h1 className="text-3xl rounded-sm bg-yellow-600 p-3 mb-5">
          MemberList
        </h1>
        {props.members &&
          props.members.map((member) => (
            <Memberlist member={member} key={member._id} />
          ))}
      </div>
      <div className="w-1/2 bg-gray-300 flex justify-center items-centers">
        <Createmember addmember={props.addmember} />
      </div>
    </>
  );
}

export default Family;
