import React, { useState } from 'react'
import TaskCreateCss from '../styles/TaskCreate.css'

const TaskCreate = ({addItemToTaskList}) => {

    const [titleInput,setTitleInput] = useState(""); 
    const [taskInput,setTaskInput] = useState(""); 

    const catchTitle = (event) => {
        setTitleInput(event.target.value);
    }

    const catchTask = (e) => {
        setTaskInput(e.target.value)
    }

    function startsWithLowerCase(str) {
        return /^[a-z]/.test(str);
    }

    const handleAddButton = (event) => {
        event.preventDefault();
        
        if (titleInput.length == 0){
            alert("You must give a title.")
        } else if (taskInput.length == 0) {
            alert("You must give a task.")
        } else if (titleInput.length < 6){
            alert("You must give 5 character at least in title input.")
        } else if (taskInput.length < 6){
            alert("You must give 5 character at least in task input.")
        } 
        else {
            addItemToTaskList(titleInput.toUpperCase(),taskInput)
        }
        setTitleInput("");
        setTaskInput("");
    }

    const handleEnterButton = (event) => {
        if(event.key == "Enter") {
            handleAddButton(event);
        }
    }

    return (
        <div className='left'>
            <h3>Please Add A Topic and A Task!</h3>
            <form className='task-form'>
                <label className='topic-label'>Topic</label>
                <input value={titleInput} className='title-input' onChange={catchTitle} onKeyUp={handleEnterButton} placeholder='Swimming' /> 
                <label className='topic-task'>Add a task!</label>
                <textarea value={taskInput} onChange={catchTask} className='task-input' onKeyUp={handleEnterButton} placeholder='Details' />
                <button onClick={handleAddButton} className='add-button'>Add!</button>
            </form>
        </div>
    )
}

export default TaskCreate