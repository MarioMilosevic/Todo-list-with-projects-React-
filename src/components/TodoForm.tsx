import { useState } from "react";
import Button from "./Button";
interface TodoFormTypes {
  toggleIsTodoEditing: () => void;
  addTodo: (newTodo: string) => void;
}

const TodoForm = ({ toggleIsTodoEditing, addTodo }: TodoFormTypes) => {
  const [todoForm, setForm] = useState({
    title: "",
    id: "",
    isFinished: false,
    date: "",
  });


  return (
    <>
      <div className="w-[35%] mt-6">
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
          <Button
            hoverColor="hover:bg-green-600"
            color="bg-green-500"
            handleClick={() => addTodo(todoForm)}
          >
            Add
          </Button>
          <Button
            hoverColor="hover:bg-red-600"
            color="bg-red-500"
            handleClick={toggleIsTodoEditing}
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};

export default TodoForm;
