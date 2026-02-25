import React from "react";
import { createRoot } from 'react-dom/client';

import "./styles.css";
import {useState,useEffect} from 'react';
function App() {
    const [currentPage,setCurrentPage] = useState(1);
        const list = [
        {id : 1,name:"Tanisha"},
        {id : 2,name:"Soni"},
        {id : 3,name:"Smrut"},
        {id : 4,name:"Gunja"},
         {id : 5,name:"niketa"},
         {id : 6,name:"preeti"},
         {id : 7,name:"dhruv"},
         {id : 8,name:"kajal"},
         {id : 9,name:"raj"}
        ]
        const itemsPerpage = 3;
    const startIdx = (currentPage - 1) * itemsPerpage;
    const endIdx = startIdx + itemsPerpage;
        const currentItems = list.slice(startIdx,endIdx)
        
        const totalPage = Math.ceil(list.length/itemsPerpage)
 
  return (
    <div className="App">
           {
              currentItems.map((l) => (
              <div key={l.id} >{l.name}</div>
              ))
          }
          <div className='control'>
              <button disabled={currentPage === 1} onClick={() =>  setCurrentPage((prev) => prev-1)}>prev</button>
              <p>{currentPage}/{totalPage}</p>
              <button disabled={currentPage === totalPage} onClick={() => {
                    
                      setCurrentPage((prev) => prev+1)
                 
                  }} >Next</button>
          </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
