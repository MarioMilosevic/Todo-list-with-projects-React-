import Header from "./components/Header";
import Project from "./components/Project";
import Todos from "./components/Todos";
import ProjectForm from "./components/ProjectForm";
import Projects from "./components/Projects";
import { useState } from "react";
function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [projects, setProjects] = useState([])
  return (
    <>
      <Header />
      <div className="flex flex-1 h-full">
        <div className="w-[20%] flex flex-col flex-1 bg-neutral-500">
        {isEditing && <ProjectForm />}
        {!isEditing && <Project />}
        {projects.map(project => <Projects/>)}
        </div>
        <Todos />
      </div>
    </>
  );
}

export default App;
