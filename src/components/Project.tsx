import { MdDeleteForever } from "react-icons/md";
import Todo from "./Todo";
import { TodoFormState } from "../types/ResumeTypes";
import EditTodoForm from "./EditTodoForm";
interface ProjectType {
  title: string;
  id: string;
  isClicked: boolean;
  activeProjectId: string;
  isSelected: (id: string) => void;
  saveEditTodo: (id: string, updatedTodo: TodoFormState) => void;
  deleteTodo: (id: string) => void;
  toggleIsTodoEditing: (id: string) => void;
  todos: TodoFormState[];
  deleteProject: (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    id: string
  ) => void;
}

const Project = ({
  title,
  id,
  isClicked,
  todos,
  activeProjectId,
  isSelected,
  deleteProject,
  saveEditTodo,
  deleteTodo,
  toggleIsTodoEditing
}: ProjectType) => {
  const projectClass = isClicked ? "bg-neutral-300" : "bg-neutral-500";
 

   
  return (
    <>
      <div className="flex">
        <div className="bg-neutral-500 w-[20%] flex flex-1 flex-col px-4 pt-2 justify-center">
          <div
            className={`${projectClass} flex border w-[80%] px-3 py-2 cursor-pointer rounded-lg mx-auto justify-between items-center text-2xl`}
            onClick={() => isSelected(id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
              />
            </svg>
            <h2>{title}</h2>
            <MdDeleteForever onClick={(e) => deleteProject(e, id)} />
          </div>
        </div>
        <div className="w-[80%] bg-neutral-300 pl-60">
          {todos.map((todo) =>
            id === activeProjectId ? (
              todo.isEditing ? (
                <EditTodoForm  key={todo.id} {...todo} saveEditTodo={saveEditTodo} toggleIsTodoEditing={toggleIsTodoEditing}/>
              ) : (
                  <Todo key={todo.id} toggleIsTodoEditing={toggleIsTodoEditing} deleteTodo={deleteTodo} {...todo} />
              )
            ) : null
          )}
        </div>
      </div>
    </>
  );
};

export default Project;
