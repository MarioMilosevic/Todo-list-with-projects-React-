import Button from "./Button";
import { useState } from "react";
type EditTodoFormType = {
  title: string;
  date: string;
  id: string;
};

const EditTodoForm = ({ title, date, id }: EditTodoFormType) => {
  const [editTodoValue, setEditTodoValue] = useState({
    title,
    date,
    id,
  });

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
              onChange={(e) => setEditTodoValue(prev => ({...prev, title:e.target.value}))}
            />
          </div>

          <div className="flex px-4 gap-4 justify-between items-center">
            <p>Due Date:</p>
            <input type="date" className="bg-transparent" value={editTodoValue.date} onChange={(e) => setEditTodoValue(prev => ({...prev, date:e.target.value}))}/>
          </div>
        </div>
        <div className="flex py-4 gap-4">
          <Button hoverColor={"hover:bg-green-600"} color={"bg-green-500"}>
            Save
          </Button>
          <Button hoverColor={"hover:bg-red-600"} color={"bg-red-500"}>
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};

export default EditTodoForm;
