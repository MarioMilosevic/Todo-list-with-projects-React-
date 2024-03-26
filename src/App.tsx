import Header from "./components/Header";
import AddProject from "./components/AddProject";
import Todos from "./components/Todos";
import Form from "./components/Form";
import Projects from "./components/Projects";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
  const [isProjectEditing, setIsProjectEditing] = useState(false);
  const [projects, setProjects] = useState([])
  const [isTodoEditing, setIsTodoEditing] = useState(false)
  return (
    <>
      <Header />
      <div className="flex flex-1 h-full">
        <div className="w-[20%] flex flex-col flex-1 bg-neutral-500">
        {isProjectEditing && <Form />}
        {!isProjectEditing && <AddProject />}
        {projects.map(project => <Projects title={project.title}/>)}
        </div>
        <Todos />
        <AddTodo/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
