import React, { Component } from 'react'
import { MdAdd } from "react-icons/md";

export class Search extends Component {
    render() {
        return (
            <div className="input">
                <input type="text" name="" id="input" placeholder="Search"  ></input>
                <MdAdd className="addIcon"/>
            </div>
        )
    }
}

export default Search
