import { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk the Dog"]);
    const [newTask, setNewTask] = useState('')

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }
    function addTask() {
        //TRIM - remove any white space
        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("")
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) =>
            i !== index
        )
        setTasks(updatedTasks)
    }
    function moveTaskUp(index) {
        if(index > 0){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index-1]] = 
            [updateTasks[index-1],updateTasks [index]];

            setTasks(updateTasks)
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index+1]] = 
            [updateTasks[index+1],updateTasks [index]];

            setTasks(updateTasks)
        }
    }
    return (
        <div className="to-do-list"
        onKeyDown={(event)=> {
            if(event.key === 'Enter'){
                addTask()
            }
        }}
        >
            <h1>To-do-List</h1>
            <div>
                <input type="text" 
                        placeholder="Enter a task"
                        value={newTask}
                        onChange={handleInputChange}
                        />
                <button className="add-button"
                        onClick={addTask}
                >
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task, index)=>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button"
                                onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                        <button className="move-button"
                                onClick={() => moveTaskUp(index)}
                        >
                            ☝️
                        </button>
                        <button className="move-button"
                                onClick={()=> moveTaskDown(index)}
                        >
                            👇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )
}
export default ToDoList;