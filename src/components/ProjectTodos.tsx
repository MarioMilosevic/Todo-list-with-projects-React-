import Todo from "./Todo";
import { TodoFormState } from "../types/ResumeTypes";

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
  return (
    <>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          deleteTodo={deleteTodo}
          saveEditTodo={saveEditTodo}
        />
      ))}
    </>
  );
};

export default ProjectTodos;
