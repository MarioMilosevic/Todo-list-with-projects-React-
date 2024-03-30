import { FaEdit } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import Button from "./Button";
// import EditTodoForm from "./EditTodoForm";
// import { useState } from "react";
// import { TodoFormState } from "../types/ResumeTypes";

interface TodoTypes {
  title: string;
  date: string;
  isFinished: boolean;
  isEditing:boolean;
  id: string;
  // saveEditTodo: (id: string, newTodo:TodoFormState) => void;
  deleteTodo: (id: string) => void;
  toggleIsTodoEditing:() => void
}
const Todo = ({
  title,
  date,
  id,
  isFinished,
  deleteTodo,
  toggleIsTodoEditing
}: TodoTypes) => {
 

  return (
    <>
      <div className="w-[80%] mt-4 p-4 flex justify-between text-xl rounded-lg items-center border border-red-500">
        <div className="items-center flex gap-4">
          <FaEdit />
          <p>Title:{title}</p>
        </div>

        <div className="flex px-4 w-[70%] justify-between items-center">
          <FaCalendarAlt />
          <p>Due Date: {date}</p>

          <div className="flex gap-4">
            <Button
              handleClick={toggleIsTodoEditing}
              hoverColor="hover:bg-green-600"
              color="bg-green-500"
            >
              Edit
            </Button>
            <Button
              handleClick={() => deleteTodo(id)}
              hoverColor="hover:bg-red-600"
              color="bg-red-500"
            >
              Delete
            </Button>
          </div>

          <div className="flex items-center justify-end">
            <input
              id="checked-checkbox"
              type="checkbox"
              checked={isFinished}
              readOnly
              className="w-4 h-4 text-blue-600 bg-neutral-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>
      </div>
      {/* {isEditing && (
        <EditTodoForm
          title={title}
          id={id}
          date={date}
          isFinished={isFinished}
          toggleIsEditing={toggleIsEditing}
          saveEditTodo={saveEditTodo}
        />
      )} */}
    </>
  );
};

export default Todo;
