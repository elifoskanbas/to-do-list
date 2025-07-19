import React, { useState } from "react"

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t,newTask]);
            setNewTask("");  
        }
        
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_ ,i) => i !== index);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index){
        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index - 1]] = [updatedTasks[index - 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if (index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index + 1]] = [updatedTasks[index + 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }



    return (

        <div className = "toDoList" >
            <h1>To-Do List</h1>
            <div>
                <input type = "text" placeholder = "Enter a task.." value = {newTask} onChange={handleInputChange}></input>
                <button className = "addBttn" onClick={addTask}>add</button>
            </div>

            <ol>
                {tasks.map((task,index) =>
                 <li key = {index} >
                    <span className = "text">{task}</span>
                    <button className = "deleteBttn" onClick={ () => deleteTask(index)}>delete</button>
                    <button className = "moveBttn" onClick={ () => moveTaskUp(index)}>up</button>
                    <button className = "moveBttn" onClick={ () => moveTaskDown(index)}>down</button>
                 </li>
                )}
            </ol>
        </div>

    )
}

export default ToDoList