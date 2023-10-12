import React from 'react'
import EachTask from './EachTask'

const TaskList = ({shownTaskList,handleDeleteButton,handleSaveUpdateButton,updateStatus,setUpdateStatus}) => {
  return (
    <div>
        {shownTaskList.map((List) => (
            <EachTask key={List.id} List={List} handleDeleteButton={handleDeleteButton} handleSaveUpdateButton={handleSaveUpdateButton} updateStatus = {updateStatus} setUpdateStatus={setUpdateStatus}/>
        ))}
    </div>
  )
}

export default TaskList