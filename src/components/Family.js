import React from "react";
import Memberlist from "./Memberlist";
import Createmember from "./Createmember";

function Family(props) {
  return (
    <>
      <div className="w-half bg-gray-600 h-full">
        {props.members &&
          props.members.map((member) => (
            <Memberlist member={member} key={member._id} />
          ))}
      </div>
      <div>
        <Createmember addmember={props.addmember} />
      </div>
    </>
  );
}

export default Family;
