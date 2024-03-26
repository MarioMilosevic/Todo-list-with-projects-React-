import Header from "./components/Header";
import AddProject from "./components/AddProject";
import Todo from "./components/Todo";
import Form from "./components/Form";
import Project from "./components/Project";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
function App() {
  const [isProjectEditing, setIsProjectEditing] = useState(false);
  const [projects, setProjects] = useState([]);
  const [isTodoEditing, setIsTodoEditing] = useState(false);
  return (
    <>
      <Header />
      <div className="flex flex-1 h-full">
        <div className="w-[20%] flex flex-col flex-1 bg-neutral-500">
          {isProjectEditing && <Form />}
          {!isProjectEditing && <AddProject />}
          {projects.map((project) => (
            <Project title={project.title} />
          ))}
        </div>
        <div className="bg-neutral-300 w-[80%] pl-60 pt-12 border border-black">
          <h2 className="text-4xl pl-6 font-semibold">Todos</h2>
           {/* <TodoForm />  */}
          <AddTodo />
          <Todo/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
