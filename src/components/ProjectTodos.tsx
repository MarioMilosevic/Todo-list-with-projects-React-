import Todo from "./Todo";
import { TodoFormState } from "../types/ResumeTypes";
import { useState } from "react";
import EditTodoForm from "./EditTodoForm";
EditTodoForm
type ProjectTodosTypes = {
  todos: TodoFormState[];
  deleteTodo: (id: string) => void;
  saveEditTodo: (id: string, newTodo:TodoFormState) => void;
};

const ProjectTodos = ({
  todos,
  deleteTodo,
  saveEditTodo,
}: ProjectTodosTypes) => {

  const [isTodoEditing, setIsTodoEditing] = useState(todos.isEditing);

  const toggleIsTodoEditing = () => {
    console.log("radi")
    setIsTodoEditing((prev) => !prev);
  };
  return (
    <>
      {todos.map((todo) => (isTodoEditing ? <EditTodoForm key={todo.id} toggleIsTodoEditing={toggleIsTodoEditing}  saveEditTodo={saveEditTodo}/> : 
        <Todo
          key={todo.id}
          {...todo}
          deleteTodo={deleteTodo}
          saveEditTodo={saveEditTodo}
          toggleIsTodoEditing={toggleIsTodoEditing}
        />
      ))}
    </>
  );
};

export default ProjectTodos;
