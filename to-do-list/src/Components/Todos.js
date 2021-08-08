import React, { Component } from 'react'
import  { MdEdit } from "react-icons/md";
import  { MdDelete } from "react-icons/md";

export class Todos extends Component {
    render() { 
        return (
            <div>
                <div className="todo">
                    <p id="pBox">My vacation set to december</p>
                    <MdEdit  className="todoIcon" id="edit"/>
                    <MdDelete  className="todoIcon" id="dlete"/>
                </div>

                <div className="todo">
                    <p id="pBox">My vacation set to december</p>
                    <MdEdit  className="todoIcon" id="edit"/>
                    <MdDelete  className="todoIcon" id="dlete"/>
                </div>

                <div className="todo">
                    <p id="pBox">My vacation set to december</p>
                    <MdEdit  className="todoIcon" id="edit"/>
                    <MdDelete  className="todoIcon" id="dlete"/>
                </div>


                <div className="notifi">
                    <p id="pNot">You have 4 pending tasks</p>
                    <button className="button">Clear</button>
                </div>
            </div>
        )
    }
}

export default Todos
