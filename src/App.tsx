import Header from "./components/Header";
import AddProject from "./components/AddProject";
import Todo from "./components/Todo";
import ProjectForm from "./components/ProjectForm";
import Project from "./components/Project";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

function App() {
  const [isProjectEditing, setIsProjectEditing] = useState(false);
  const [projects, setProjects] = useState([]);
  const [isTodoEditing, setIsTodoEditing] = useState(false);
  const [globalTodos, setGlobalTodos] = useState([]);

  const toggleIsProjectEditing = () => {
    setIsProjectEditing((prev) => !prev);
  };

  const addProject = (newProject: string) => {
    setProjects((prev) => [...prev, newProject]);
  };

  const addTodo = (newTodo: string) => {
    setGlobalTodos((prev) => [...prev, newTodo]);
  };

  const deleteProject = (e, id: string) => {
    e.stopPropagation();
    const filteredProjects = projects.filter((project) => project.id !== id);
    setProjects(filteredProjects);
  };

  const isSelected = (id: string) => {
    const updatedProjects = projects.map((project) => ({
      ...project,
      isClicked: project.id === id,
    }));
    setProjects(updatedProjects);
  };

  const updateTodos = () => {
    console.log("update");
  };

  const toggleIsTodoEditing = () => {
    setIsTodoEditing((prev) => !prev);
  };

  const toggleIsTodoFinished = (id: string) => {
  setGlobalTodos(prev => {
    const updatedTodos = prev.map(todo => todo.id === id ? {...todo, isFinished:!todo.isFinished} : todo)
    return updatedTodos
  })
}


  return (
    <>
      <Header />
      <div className="flex flex-1 h-full">
        <div className="w-[20%] flex flex-col flex-1 bg-neutral-500">
          <h2 className="pt-12 text-center text-4xl font-semibold">Projects</h2>
          {isProjectEditing ? (
            <ProjectForm
              addProject={addProject}
              toggleIsProjectEditing={toggleIsProjectEditing}
            />
          ) : (
            <AddProject toggleIsProjectEditing={toggleIsProjectEditing} />
          )}
          {projects.map(
            (project: { id: string; title: string; isClicked: boolean }) => {
              return (
                <Project
                  key={project.id}
                  {...project}
                  isSelected={isSelected}
                  deleteProject={deleteProject}
                  updateTodos={updateTodos}
                />
              );
            }
          )}
        </div>
        <div className="bg-neutral-300 w-[80%] pl-60 pt-12 border border-black">
          <h2 className="text-4xl pl-6 font-semibold">Todos</h2>
          {isTodoEditing ? (
            <TodoForm
              toggleIsTodoEditing={toggleIsTodoEditing}
              addTodo={addTodo}
            />
          ) : (
            <AddTodo toggleIsTodoEditing={toggleIsTodoEditing} />
          )}
          {globalTodos.map((todo) => (
            <Todo
              key={todo.id}
              toggleIsTodoFinished={toggleIsTodoFinished}
              {...todo}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
