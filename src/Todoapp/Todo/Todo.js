import React, { useState } from "react";
import "./style.css";

export default function Todo() {

    const [newItem, setNewitem] = useState("");
    const [items, setItems] = useState([]);
    const [diditems, setDiditems] = useState([]);

    // Helper functions
    function addItem() {

        if (!newItem) {
            alert("Please enter to a void")
            return false;
        }

        const item = {
            id: Math.floor(Math.random() * 100),
            value: newItem
        }

        setItems(oldList => [...oldList, item]);

        setNewitem("");

    }

    function deleteBtn(id) {
        const newArray = items.filter((item) =>
            item.id != id
        )
        setItems(newArray);
    }

    function didlist(id) {
        const didArray = items.filter((item) => item.id == id)
        setDiditems(didArray)

    }
    // Helper functions


    return (
        <div className="container">

            {/* 1. Header */}
            <h1>Todo List App</h1>

            {/* 2. Input */}
            <input
                className="input"
                value={newItem}
                onChange={e => setNewitem(e.target.value)}
            />
            <button
                className="addBtn"
                onClick={() => addItem()}
            >Add</button>

            {/* 3. List  */}
            <div className="list">

                <ol>
                    {items.map((item) => {
                        return (
                            <li key={item.id}>
                                {item.value}
                                <p>

                                    <button className="deleteBtn" onClick={() => deleteBtn(item.id)}>
                                        ✖️
                                    </button>
                                    <button className="addBtn" onClick={() => didlist(item.id)}>
                                        👏🏻
                                    </button>
                                </p>
                            </li>
                        )
                    })}

                </ol>
            </div>

            {/* Did list */}

            <h3>Did list</h3>

            <ol>
                {diditems.map(item =>
                    <li className="diditem" key={item.id}>
                        {item.value}
                        <button className="addBtn">✔️</button>
                    </li>)

                }
            </ol>
        </div>
    )
};
