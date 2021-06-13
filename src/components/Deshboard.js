import Family from "./Family";
import Loader from "./Loader";
import useFetch from "../useFetch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import memberlist from "./Memberlist";
import Createmember from "./Createmember";

function Deshboard() {
  const [members, setmembers] = useState([]);
  const { data, ispending, error } = useFetch(
    "http://localhost:5000/memberlist/60bcc6e83a0d25360c333171"
  );

  useEffect(() => {
    setmembers(data);
  }, [data]);

  const addmember = (newmember) => {
    console.log(newmember);
    setmembers([...members, newmember]);
  };
  return (
    <div className="flex bg-gray-100 h-screen w-full">
      {error && <div>{error}</div>}
      {ispending && <Loader />}
      {data && <Family members={members} addmember={addmember} />}
    </div>
  );
}

export default Deshboard;
