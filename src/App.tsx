import { useState } from "react";
import Header from "./components/Header";
import AddProject from "./components/AddProject";
import ProjectForm from "./components/ProjectForm";
import Project from "./components/Project";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import TodoForm from "./components/TodoForm";
import ProjectTodos from "./components/ProjectTodos";
import { ProjectState, TodoFormState } from "./types/ResumeTypes";

function App() {
  const [isProjectEditing, setIsProjectEditing] = useState(false);
  const [projects, setProjects] = useState<ProjectState[]>([]);
  const [isTodoForm, setIsTodoForm] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState("");

  const currentDate = new Date().toISOString().slice(0, 10);

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
  };

  const deleteProject = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    const filteredProjects = projects.filter((project) => project.id !== id);
    setProjects(filteredProjects);
  };

  const deleteTodo = (id: string) => {
    setProjects((prev) => {
      const updatedProjects = prev.map((project) => {
        if (project.id === activeProjectId) {
          const updatedTodos = project.todos.filter((todo) => todo.id !== id);
          return { ...project, todos: updatedTodos };
        }
        return project;
      });
      return updatedProjects;
    });
  };

  const saveEditTodo = (id: string, updatedTodo: TodoFormState) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === activeProjectId
          ? {
              ...project,
              todos: project.todos.map((todo) =>
                todo.id === id ? { ...todo, ...updatedTodo } : todo
              ),
            }
          : project
      )
    );
  };

  const isSelected = (id: string) => {
    setActiveProjectId(id);
    const updatedProjects = projects.map((project) => ({
      ...project,
      isClicked: project.id === id,
    }));
    setProjects(updatedProjects);
  };

  const toggleIsTodoForm = () => {
    if (projects.length > 0 && activeProjectId) {
      setIsTodoForm((prev) => !prev);
    }
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
          {/* {projects.map((project) =>
            project.id === activeProjectId ? (
              <Project
                activeProjectId={activeProjectId}
                {...project}
                key={project.id}
                isSelected={isSelected}
                deleteProject={deleteProject}
              />
            ) : null
          )} */}
          {projects.map(
            (project: { id: string; title: string; isClicked: boolean }) => {
              return (
                <Project
                  key={project.id}
                  {...project}
                  isSelected={isSelected}
                  deleteProject={deleteProject}
                  activeProjectId={activeProjectId}
                />
              );
            }
          )}
        </div>
        <div className="bg-neutral-300 w-[80%] pl-60 pt-12 border border-black">
          <h2 className="text-4xl pl-6 font-semibold">Todos</h2>
          {isTodoForm ? (
            <TodoForm
              toggleIsTodoForm={toggleIsTodoForm}
              addTodo={addTodo}
              currentDate={currentDate}
            />
          ) : (
            <AddTodo toggleIsTodoForm={toggleIsTodoForm} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
{
  /* {projects.map((project) =>
            project.id === activeProjectId ? (
              <ProjectTodos
                key={project.id}
                todos={project.todos}
                deleteTodo={deleteTodo}
                saveEditTodo={saveEditTodo}
              />
            ) : null
          )} */
}
