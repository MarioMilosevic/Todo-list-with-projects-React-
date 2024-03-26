import Header from "./components/Header"
import Projects from "./components/Projects"
import Todos from "./components/Todos"
import ProjectForm from "./components/ProjectForm"
import { useState } from "react";
function App() {
  const [isEditing,setIsEditing] = useState(true)
  return (
    <>
      <Header/>
      <div className="flex flex-1 h-full border border-black">
        {isEditing && <ProjectForm/>}
        {!isEditing && <Projects/>}
        <button onClick={()=> setIsEditing(!isEditing)}>Click me</button>
      <Todos/>
      </div>
    </>
  )
}

export default App
