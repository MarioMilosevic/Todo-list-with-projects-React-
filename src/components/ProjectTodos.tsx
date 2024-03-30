import Todo from "./Todo";
import { TodoFormState } from "../types/ResumeTypes";
import EditTodoForm from "./EditTodoForm";
type ProjectTodosTypes = {
  todos: TodoFormState[];
  deleteTodo: (id: string) => void;
  saveEditTodo: (id: string, newTodo: TodoFormState) => void;
};

const ProjectTodos = ({
  todos,
  deleteTodo,
  saveEditTodo,
}: ProjectTodosTypes) => {
 

  return (
    <>
      {todos.map((todo) =>
        isTodoEditing ? (
          <EditTodoForm
            key={todo.id}
            {...todo}
            toggleIsTodoEditing={toggleIsTodoEditing}
            saveEditTodo={saveEditTodo}
          />
        ) : (
          <Todo
            key={todo.id}
            {...todo}
            deleteTodo={deleteTodo}
            // saveEditTodo={saveEditTodo}
            toggleIsTodoEditing={toggleIsTodoEditing}
          />
        )
      )}
    </>
  );
};

export default ProjectTodos;
