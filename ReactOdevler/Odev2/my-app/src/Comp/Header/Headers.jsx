import { useState } from 'react'
import uuid from 'react-uuid';

function Headers({setHold, hold}) {
    const [form, setForm] = useState({fullname: "", });
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };
    const onSubmit = (e) =>{
        
        e.preventDefault();
        if(form.fullname===""){
            return false
        }
        setHold([...hold, form, ])
        setForm({fullname: '', id: uuid()},  )   
    }

return (
    <div >
    <header className='header'>
        <h1>todos</h1>
        <form onSubmit = {onSubmit}>
            <input name='fullname' value={hold.fullname}   className='new-todo' onChange={onChangeInput} placeholder='What needs to be done?' autoFocus />
        </form>
    </header>
</div>


   
    
  )
}

export default Headers