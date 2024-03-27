import Header from "./components/Header";
import AddProject from "./components/AddProject";
import Todo from "./components/Todo";
import ProjectForm from "./components/ProjectForm";
import Project from "./components/Project";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
// da selektujem projekat, on dobije klasu, ostali ne dobiju klasu
// njemu stavim da je selektovan njima da nisu, znaci kliknuti da ostali ne
function App() {
  const [isProjectEditing, setIsProjectEditing] = useState(false);
  const [projects, setProjects] = useState([]);
  const [isTodoEditing, setIsTodoEditing] = useState(false);
  const [todos, setTodos] = useState([]);

  const toggleIsProjectEditing = () => {
    setIsProjectEditing((prev) => !prev);
  };

  const addProject = (newProject: string) => {
    setProjects((prev) => [...prev, newProject]);
  };

  const isSelected = (id: string) => {
    const updatedProjects = projects.map(project => ({
      ...project, 
      isClicked:project.id === id
    }))
    setProjects(updatedProjects)
  };

  return (
    <>
      <Header />
      <div className="flex flex-1 h-full">
        <div className="w-[20%] flex flex-col flex-1 bg-neutral-500">
          {isProjectEditing ? (
            <ProjectForm
              addProject={addProject}
              toggleIsProjectEditing={toggleIsProjectEditing}
            />
          ) : (
            <AddProject toggleIsProjectEditing={toggleIsProjectEditing} />
          )}
          {projects.map((project: { id: string; title: string, isClicked:boolean }) => {
            return (
              <Project
                key={project.id}
                {...project}
                // id={project.id}
                // title={project.title}
                // isClicked={project.isClicked}
                isSelected={isSelected}
              />
            );
          })}
        </div>
        <div className="bg-neutral-300 w-[80%] pl-60 pt-12 border border-black">
          <h2 className="text-4xl pl-6 font-semibold">Todos</h2>
          {isTodoEditing ? <TodoForm /> : <AddTodo />}
          {todos.map((todo) => (
            <Todo title={todo} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
