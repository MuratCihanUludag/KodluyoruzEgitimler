import React from 'react'

function Section( {hold,setHold, hide} ) {

    const listView = (e) => {
        if (hide === "all") {
            return e === true ? 'completed' : ''
        } else if (hide === "active") {
            return e === true ? 'hidden' : ''
        } else if (hide === "completed") {
            return e === true ? 'completed' : 'hidden'
        }
    }

  return (
    <section>
        <input type="cheackbox" className='toggle-all' />,
        <label htmlFor="toggle-all">
            Mark all as complate
        </label>
        <ul className='todo-list'>
                {
                    hold.map((todo, index) =>
                    <li className={listView(todo.status)} key={index}  >
                        <div className='view'>
                            <input type="checkbox" className="toggle" onClick={() => {
                                setHold(hold.map(value => value.id === todo.id ? { ...value, status: !value.status } : value));
                            }} />
                            <label> {todo.fullname} </label>
                            <button  className="destroy" onClick={() => {
                                    setHold(hold.filter(value => value.id !== todo.id));
                                }}  ></button>
                        </div>
                    </li> )
                }                
        </ul>
    </section>
  )
}

export default Section