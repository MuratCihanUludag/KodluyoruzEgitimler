import React from 'react'

function Footer({ setHold, hold, hide, setHide }) {
    return (
        <div>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{hold.filter(value => value.id !== "").length}</strong>
                    items left
                </span>
                <ul className="filters">
                    <li>
                        <a href="#/" className={hide === "all" && "selected"} onClick={() => (setHide("all"))}>All</a>
                    </li>
                    <li>
                        <a href="#/"  className={hide === "active" && "selected"} onClick={() => (setHide("active"))} >Active</a>
                    </li>
                    <li>
                        <a href="#/" className={hide === "completed" && "selected"} onClick={() => (setHide("completed"))}>Completed</a>
                    </li>
                </ul>
                {
                    hold.some(item => item.id !== "") && <button className="clear-completed" onClick={() => {
                        setHold(hold.filter(item => item.id === ""));
                    }} >
                        Clear completed
                    </button>
                }
            </footer>
        </div>
    )
}

export default Footer