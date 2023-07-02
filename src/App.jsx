import React, { useState, useEffect } from "react";
import "./App.css";
import { Users } from "./users";
import Table from "./Table";
import axios from 'axios'

const App = () => {
  const [query, setQuery] = useState("");

const [data, setData] = useState([]);

useEffect(()=>{
  const fetchUsers = async () =>{
    const res = await axios.get("http://localhost:8000")
  };
  fetchUsers()
}, []);  

  // const search = (data)=>{
  //   return data.filter(item=> 
  //     keys.some(key => item[key].toLowerCase().includes(query))
  //     )
  // }

  return (
    <div className="app">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      
      <Table data={data}/>
    </div>
  );
};

export default App;
