import { useState } from "react";
import Button from "./Button";
import { TodoFormState } from "../types/ResumeTypes";
import { MouseEvent } from "react";

interface TodoFormTypes {
  toggleIsTodoEditing: () => void;
  addTodo: (newTodo: TodoFormState) => void;
  currentDate:string;
}

const TodoForm = ({ toggleIsTodoEditing, addTodo, currentDate }: TodoFormTypes) => {
  const [todoForm, setForm] = useState({
      title: "",
      id: "",
      date: currentDate,
      isFinished: false,
      isEditing:false
  });

  const handleAddTodo = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    toggleIsTodoEditing();
    addTodo(todoForm);
  };


  return (
    <>
      <form className="w-[35%] mt-6">
        <div className="flex gap-4 items-center mb-4">
          <input
            value={todoForm.title}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                title: e.target.value,
                id: crypto.randomUUID(),
              }))
            }
            type="text"
            className="bg-neutral-200 border border-neutral-500 flex justify-between cursor-pointer items-center p-3 px-6 text-2xl rounded-full hover:bg-neutral-300"
          ></input>
          <input
            type="date"
            className="bg-neutral-300"
            value={todoForm.date}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, date: e.target.value }))
            }
          />
        </div>
        <div className="flex gap-4  mx-auto mt-2">
          <button className="px-4 py-2 w-full text-xl font-semibold rounded-lg bg-green-500 hover:bg-green-600" onClick={(e) => handleAddTodo(e)}>Add</button>
          <Button
            hoverColor="hover:bg-red-600"
            color="bg-red-500"
            handleClick={toggleIsTodoEditing}
          >
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
