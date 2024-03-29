import Todo from "./Todo";

const ProjectTodos = ({ todos, deleteTodo, saveEditTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo}  deleteTodo={deleteTodo} saveEditTodo={saveEditTodo}/>
      ))}
    </>
  );
};

export default ProjectTodos;
