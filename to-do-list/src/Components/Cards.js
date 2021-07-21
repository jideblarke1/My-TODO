import React from 'react';
import { MdAdd } from "react-icons/md";
import AddNew from "./AddNew"
import Todo from "./Todos"

function cards(props) {
    
    return (
        <div className ="card">
         <h1>{props.data}</h1>
        <h2>{props.number}</h2> 

        <div>
                <AddNew/>
                <Todo/>
        </div>





        
        
        </div>
    )
}

export default cards
