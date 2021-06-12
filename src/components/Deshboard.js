import Family from "./Family";
import Loader from "./Loader";
import useFetch from "../useFetch";
import { useEffect, useState } from "react";

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
    <div className="w-full h-auto bg-green-500  flex flex-col sm:flex-row justify-center flex-auto">
      {error && <div>{error}</div>}
      {ispending && <Loader />}
      {data && <Family members={members} addmember={addmember} />}
    </div>
  );
}

export default Deshboard;
