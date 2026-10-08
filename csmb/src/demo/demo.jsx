//experiment 2a
import React, { Component } from "react"; 
class Counter extends Component { 
  constructor() { 
    super(); 
    this.state = { 
      count: 0 
    }; 
  } 
  increment = () => { 
    this.setState({ count: this.state.count + 1 }); 
  }; 
  render() { 
    return ( 
    <div> 
    <h2>React Class Component Counter</h2> 
    <h3>Count: {this.state.count}</h3> 
    <button onClick={this.increment}>Increment</button> 
    </div> 
    ); 
  } 
} 
export default Counter;


//experiment 2b
import React, { useState } from "react"; 
function App() { 
  const [count, setCount] = useState(0); 
  return ( 
    <div> 
    <h2>React Functional Counter</h2> 
    <h3>Count: {count}</h3> 
    <button onClick={() => setCount(count + 1)}> 
    Increment 
    </button> 
    </div> 
  ); 
} 
export default App; 




//experiment 2c
import React, { useState } from "react"; 
function App() { 
  const [message, setMessage] = useState(""); 
  const handleClick = () => { 
    setMessage("Welcome to React Event Handling"); 
  }; 
  return ( 
    <div> 
    <h2>Button Click Event</h2> 
    <button onClick={handleClick}> 
    Click Here 
    </button> 
    <h3>{message}</h3> 
    </div> 
  ); 
} 
export default App; 


//experiment 2d

import React, { useState } from "react"; 
function App() { 
  const [show, setShow] = useState(true); 
  return ( 
    <div> 
    <button onClick={() => setShow(!show)}> 
    Toggle 
    </button> 
    {show ? ( 
    <h2>Welcome to React.js</h2> 
    ) : ( 
    <h2>Component Hidden</h2> 
    )} 
    </div> 
  ); 
} 
export default App;


//experiment 2e

import React from "react"; 
function App() { 
  const college = "SVCET Engineering College"; 
  const course = "Web Technologies Laboratory"; 
  const subject = "React.js"; 
  return ( 
    <div> 
    <h2>{college}</h2> 
    <h3>{course}</h3> 
    <p>Subject: {subject}</p> 
    <p>{"Welcome to React using String Literals."}</p> 
    </div> 
  ); 
} 
export default App;

//experiment 3a

import React, { useState } from "react"; 
function App() { 
  const [count, setCount] = useState(0); 
  const increment = () => { 
    setCount(count + 1); 
  }; 
  return ( 
    <div style={{ textAlign: "center" }}> 
    <h2>React useState Hook</h2> 
    <h3>Counter: {count}</h3> 
    <button onClick={increment}> 
    Increment 
    </button> 
    </div> 
  ); 
} 
export default App; 


//experiment 3b
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
 


  // experiment 3c
  import React , {useEffect, useState} from "react";
function App(){
    const[users,setUsers]=useState([]);//here setcount is syntax
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>setUsers(data));
    },[]);
    return(
        <div>
          <h2>User List</h2>
        </div>
        {users.map(user)=>(
          <p key={user.id}>{user.name}</p>
        );});
      }
 
  export default App;

//experiment - 3d
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Hello " + name); // Added space after "Hello"
  };

  return (
    <div>
      <h2>Student Form</h2>
     
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type="text" 
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;


//experiment - 3e
function App() {
  const students=["yaso","nivi","vinu"];
  return(
    <div>
      <h2>Student List </h2>
      <ul>
        {students.map((student,index)=>(
          <li key={index}>{student}</li>
        ))}
        
      </ul>
    </div>
  );
  
}
export default App;