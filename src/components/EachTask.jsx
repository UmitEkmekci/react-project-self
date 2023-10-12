import React, { useState } from 'react'
import EachTaskCss from '../styles/EachTask.css'

const EachTask = ({ List, handleDeleteButton, handleSaveUpdateButton, updateStatus, setUpdateStatus }) => {

    const [titleInputForUpdateFunc,setTitleInputForUpdateFunc] = useState(List.title);
    const [taskInputForUpdateFunc,setTaskInputForUpdateFunc] = useState(List.task);

    const catchTitleFunc = (event) => {
        setTitleInputForUpdateFunc(event.target.value)
        console.log(titleInputForUpdateFunc);
    }

    const catchTaskFunc = (event) => {
        setTaskInputForUpdateFunc(event.target.value)
        console.log(taskInputForUpdateFunc);
    }

    return (
        <div className='left'>
            {updateStatus ? (
                <>
                    <input className='input-title' onChange={catchTitleFunc} value={titleInputForUpdateFunc} placeholder='title' />
                    <textarea className='input-task' onChange={catchTaskFunc} value={taskInputForUpdateFunc} />
                    <button className='button-saveupdate' onClick={() => handleSaveUpdateButton(List.id, titleInputForUpdateFunc, taskInputForUpdateFunc)}>
                        <img src='https://previews.123rf.com/images/faysalfarhan/faysalfarhan1605/faysalfarhan160500821/56061892-save-floppy-disk-icon-yellow-square-button.jpg' width="20px" height="20px"></img>
                    </button>
                </>
            ) :
                (
                    <>
                        <div className='item'>
                            <div key={List.id}>Task Title:{List.title}</div>
                            <div>Task: {List.task}</div>
                            <div className='buttons'>
                                <button className='button-delete' onClick={() => handleDeleteButton(List.id)}>Delete</button>
                                <button className='button-update' onClick={() => setUpdateStatus(true)}>Update</button>
                            </div>
                        </div >
                    </>
                )
            }
        </div >
    )
}
export default EachTask