import React from "react";
import { createRoot } from 'react-dom/client';

import "./styles.css";
import {useState,useEffect} from 'react';
function App() {
    
       const [search,setSearch] = useState('');
    const list = [
        {id : 1,name:"Tanisha"},
        {id : 2,name:"Soni"},
        {id : 3,name:"Smrut"},
        {id : 4,name:"Gunja"},
    ]
    
    const [filter,setFilter] = useState(list);
    
    
    useEffect(() => {
        const timer = setTimeout(() => {

         let filterSearch = list.filter((l) => l.name.toLowerCase().includes(search.toLowerCase()));
                setFilter(filterSearch);                
        },300);
        return  ()=> {
            clearTimeout(timer);
        }
    },[search])
 
  return (
    <div className="App">
          <input placeholder='Enter name' name='name' id='name' value={search} onChange={(e) => setSearch(e.target.value)}/>
           {
              filter.map((l) => (
              <div key={l.id}>{l.name}</div>
              ))
          }
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);