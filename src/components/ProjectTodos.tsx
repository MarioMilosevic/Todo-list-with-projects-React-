import Todo from "./Todo";

const ProjectTodos = ({ todos }) => {
  console.log(todos);
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} date={todo.date} />
      ))}
    </>
  );
};

export default ProjectTodos;
