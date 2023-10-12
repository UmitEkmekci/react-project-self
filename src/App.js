import { useState} from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import FilterInputBar from './components/FilterInputBar';
import FilterOutputList from './components/FilterOutputList';

function App() {

  const [shownTaskList, setShownTaskList] = useState([]);
  const [listForSearch, setListForSearch] = useState([]);
  const [indexNumber, setIndexNumber] = useState(1);

  debugger;
  const addItemToTaskList = (title, task) => {
    setIndexNumber(indexNumber + 1);
    const updatedListForAddOp = [
      ...shownTaskList, {
        id: indexNumber,
        title: title,
        task: task
      }
    ]
    setShownTaskList(updatedListForAddOp);

    const List = [
      ...listForSearch, {
        title: title,
        task: task
      }
    ]
    setListForSearch(List);
    console.log(listForSearch);
  }

  const handleDeleteButton = (idForDelete) => {
    const updatedListForDeleteOp = shownTaskList.filter(
      task => task.id !== idForDelete
    )
    setShownTaskList(updatedListForDeleteOp)
    setListForSearch(updatedListForDeleteOp)
  }

  const [updateStatus, setUpdateStatus] = useState(false);

  const handleSaveUpdateButton = (idForUpdate, newTitle, newTask) => {
    const updatedListForUpdateOp = shownTaskList.map(
      task => {
        if (task.id === idForUpdate) {
          return { ...task, title: newTitle, task: newTask }
        }
        return task;
      }
    )
    setShownTaskList(updatedListForUpdateOp);
    setListForSearch(updatedListForUpdateOp)

    setUpdateStatus(false);
  }

  return (
      <div className="app">
        <div className='left'>
          <TaskCreate addItemToTaskList={addItemToTaskList} />
          <TaskList shownTaskList={shownTaskList} handleDeleteButton={handleDeleteButton} handleSaveUpdateButton={handleSaveUpdateButton} updateStatus={updateStatus} setUpdateStatus={setUpdateStatus} />
        </div>
        <div className='right'>
          <FilterInputBar listForSearch={listForSearch}  />
        </div>
      </div>
);
}

export default App;
