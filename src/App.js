import './App.css';
import React from "react"
import Todo from './component/Todo.';
import {useState} from "react"

function App() {
  let [todosArray, setTodosArray] = useState([
    {id: Math.random(), title: "Read Book1", details: "The book is about History", isCompleted: false},
    {id: Math.random(), title: "Read Book2", details: "The book is about Programming", isCompleted: false},
    {id: Math.random(), title: "Read Book3", details: "The book is about science", isCompleted: false},
  ])
  
  let [inputValue, setInputValue] = useState("")
  let toDos = todosArray.map((element)=>{
    return <Todo key={element.id} singleElement = {element} allElement = {todosArray} setAllElement = {setTodosArray}/>
  })



  return (
    <div className="App" style={{width: "50%", border: "2px solid blue", padding: "20px"}}>
        <h1 style={{textAlign: "center"}}>My Task</h1>
        <div>
          {toDos}
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <input value={inputValue} onChange={changeInput} style={{width: "60%", padding: "10px"}} type='text'/>
          <button onClick={addToToDosArray} style={{padding: "10px 20px", backgroundColor: "blue", color: "white", border: "none", outline: "none"}}>ADD</button>
        </div>
    </div>
  );




  function changeInput(event) {
    setInputValue(event.target.value)
  }
  function addToToDosArray() {
    if(inputValue !== "") {
      setTodosArray([...todosArray, {id: Math.random(), title: inputValue , details: ""}])
      setInputValue("")
    }
  }
}

export default App;