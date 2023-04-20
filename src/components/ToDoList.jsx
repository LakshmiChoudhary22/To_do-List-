import React from 'react'

export default function ToDoList(props) {
    return (
        <div className='todo_style'>
            {/* <i class = 'fa fa-times' aria-hidden="true/> */}
            <button className='close_btn' onClick={() => {
                props.onSelect(props.id);
            }}>
                x
            </button>
            <li>{props.text}</li>
        </div>
    )
}
