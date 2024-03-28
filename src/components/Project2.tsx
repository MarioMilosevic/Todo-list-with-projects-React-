const Project2 = ({ id, name, todos }) => {
  return (
    <div className="border border-black ">
      <h1>{name}</h1>
      <div>
        <h3>TODOS</h3>
        {todos.map((todo) => {
          <p>{todo}</p>;
        })}
      </div>
    </div>
  );
};

export default Project2;
