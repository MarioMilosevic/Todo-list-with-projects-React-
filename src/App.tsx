import Header from "./components/Header";
import AddProject from "./components/AddProject";
import Todo from "./components/Todo";
import ProjectForm from "./components/ProjectForm";
import Project from "./components/Project";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import TodoForm from "./components/TodoForm";
import { projectState } from "./initialState";
import { todoState } from "./initialState";
import { useState } from "react";
import { ProjectState, TodoFormState } from "./types/ResumeTypes";

function App() {
  const [isProjectEditing, setIsProjectEditing] = useState(false);
  const [projects, setProjects] = useState([]);

  const [isTodoEditing, setIsTodoEditing] = useState(false);
  const [activeProject, setActiveProject] = useState(projectState);

  const toggleIsProjectEditing = () => {
    setIsProjectEditing((prev) => !prev);
  };

  const addProject = (newProject: ProjectState) => {
    setProjects((prev) => [...prev, newProject]);
  };

  const addTodo = (newTodo: TodoFormState) => {
    const selectedProject = projects.find((project) => project.isClicked);
    setProjects((prev) =>
      prev.map((project) =>
        project === selectedProject
          ? { ...project, todos: [...project.todos, newTodo] }
          : project
      )
    );
    setActiveProject(selectedProject)
  };

  const deleteProject = (e, id: string) => {
    e.stopPropagation();
    const filteredProjects = projects.filter((project) => project.id !== id);
    setProjects(filteredProjects);
  };

  const isSelected = (id: string) => {
    const selectedProject = projects.find((project) => project.id === id);
    setActiveProject(selectedProject);
    const updatedProjects = projects.map((project) => ({
      ...project,
      isClicked: project.id === id,
    }));
    setProjects(updatedProjects);
  };

  const toggleIsTodoEditing = () => {
    setIsTodoEditing((prev) => !prev);
  };

  const toggleIsTodoFinished = (id: string) => {
    setProjects((prev) => {
      const updatedProjects = prev.map((todo) =>
        todo.id === id ? { ...todo, isFinished: !todo.isFinished } : todo
      );
      return updatedProjects;
    });
    // setGlobalTodos((prev) => {
    //   const updatedTodos = prev.map((todo) =>
    //     todo.id === id ? { ...todo, isFinished: !todo.isFinished } : todo
    //   );
    //   return updatedTodos;
    // });
  };

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
          {activeProject.todos.map((todo) => (
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

// imam array projekata, svaki projekat ima svoj array
// imam array prikazanihToduova koji trebaju da prikazu array od projekta
// kada kliknem na projekat, dam mu klasu, i kazem mu isSelected:true
