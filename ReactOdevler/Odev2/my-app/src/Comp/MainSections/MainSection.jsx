import React from 'react'
import "./style.css";
import  Headers  from "../Header/Headers";
import Sections from "../Sections/Section";
import Footers from "../Footer/Footer";
import { useState, useEffect } from 'react';
function MainSection() {
  const [hide, setHide] = useState("")
  const [hold, setHold] = useState([
    {
      id: 1,
      fullname: 'Learn JavaScript',   
  },
  {
      id: "2",
      fullname: 'Learn React',
  },
  {
      id: "3",
      fullname: 'Have a life!',
  }
  ])
  useEffect(() => {
  }, [hold])

  const deleteTodos = (id) =>{
    let newTodos = hold.filter((hold) => hold.id !== id);
    setHold(newTodos)
}
 
  return (
    <div className='todoapp'>
      <Headers  setHold={ setHold } hold = {hold} />
      <Sections setHold={ setHold } hold = {hold} hide= {hide}  deleteTodos={deleteTodos}  />
      <Footers setHold={ setHold } hold = {hold} hide= {hide} setHide= {setHide} />
    </div>
  )
}

export default MainSection