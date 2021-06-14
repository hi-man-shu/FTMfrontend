import React, {useState} from 'react'

function Createtask(props) {
    const [title, setName] = useState("");
  const [description, setEmail] = useState("");
  const [date, setDate] = useState("");
  const Createtask = (e) => {
    e.preventDefault();
    const task = {
        title,
        description,
        date,
    };
    console.log(task)
     return props.addtask(task);
  };
    return (
        <div className="text-lg w-1/2">
        <form className="grid grid-flow-row" onSubmit={Createtask} >
            
            <label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder=""
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
                
        <label>
          <input
            type="date"
            name="date"
            selected="07/25/2021"
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        
        <input type="submit" value="Save" />
      </form>
        </div>
    )
}

export default Createtask
