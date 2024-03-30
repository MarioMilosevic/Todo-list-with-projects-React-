import { TodoFormState } from "../types/ResumeTypes";
import Button from "./Button";
import { useState } from "react";

type EditTodoFormType = {
  title: string;
  date: string;
  isFinished: boolean;
  id: string;
  // toggleIsEditing: () => void;
  saveEditTodo: (id: string, newTodo: TodoFormState) => void;
  toggleIsTodoEditing:(id:string) => void;
};

const EditTodoForm = ({
  title,
  date,
  id,
  isFinished,
  isEditing,
  // toggleIsEditing,
  saveEditTodo,
  toggleIsTodoEditing
}: EditTodoFormType) => {
  const [editTodoValue, setEditTodoValue] = useState({
    title,
    date,
    id,
    isFinished,
    isEditing
  });

  const saveHandler = () => {
    saveEditTodo(id, editTodoValue);
    toggleIsTodoEditing(id)

  };
  return (
    <>
      <div className="w-[70%] mt-4">
        <div className="p-4 flex justify-between text-xl rounded-lg items-center border border-neutral-500">
          <div className="w-[50%] items-center justify-between flex gap-4">
            <p>Todo:</p>
            <input
              type="text"
              className="rounded-lg py-1 px-2 w-[80%]"
              value={editTodoValue.title}
              onChange={(e) =>
                setEditTodoValue((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </div>

          <div className="flex px-4 gap-4 justify-between items-center">
            <p>Due Date:</p>
            <input
              type="date"
              className="bg-transparent"
              value={editTodoValue.date}
              onChange={(e) =>
                setEditTodoValue((prev) => ({ ...prev, date: e.target.value }))
              }
            />
          </div>
          <input
            type="checkbox"
            checked={editTodoValue.isFinished}
            className="w-4 h-4 text-blue-600 bg-neutral-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) =>
              setEditTodoValue((prev) => ({
                ...prev,
                isFinished: e.target.checked,
              }))
            }
          />
        </div>
        <div className="flex py-4 gap-4">
          <Button
            handleClick={saveHandler}
            hoverColor={"hover:bg-green-600"}
            color={"bg-green-500"}
          >
            Save
          </Button>
          <Button
            handleClick={() => toggleIsTodoEditing(id)}
            hoverColor={"hover:bg-red-600"}
            color={"bg-red-500"}
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};

export default EditTodoForm;
