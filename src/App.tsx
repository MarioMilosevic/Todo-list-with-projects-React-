import Header from "./components/Header";
import AddProject from "./components/AddProject";
import Todos from "./components/Todos";
import Form from "./components/Form";
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
        {isEditing && <Form />}
        {!isEditing && <AddProject />}
        {projects.map(project => <Projects/>)}
        </div>
        <Todos />
      </div>
    </>
  );
}

export default App;
