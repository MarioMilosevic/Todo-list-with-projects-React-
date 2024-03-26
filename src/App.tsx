import Header from "./components/Header"
import Project from "./components/Project"
import Todos from "./components/Todos"
import ProjectForm from "./components/ProjectForm"
import Projects from "./components/Projects"
import { useState } from "react";
function App() {
  const [isEditing,setIsEditing] = useState(false)
  return (
    <>
      <Header/>
      <div className="flex flex-1 h-full border border-black">
        {isEditing && <ProjectForm/>}
        {!isEditing && <Project/>}
        <Projects/>
      <Todos/>
      </div>
    </>
  )
}

export default App
