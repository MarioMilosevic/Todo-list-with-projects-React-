import { FaEdit } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import Button from "./Button";
import EditTodoForm from "./EditTodoForm";

interface TodoTypes {
  title: string;
  date: string;
  isFinished: boolean;
  id: string;
  toggleIsTodoFinished: (id: string) => void;
}
const Todo = ({
  title,
  date,
  id,
  isFinished,
  toggleIsTodoFinished,
}: TodoTypes) => {
  return (
    <>
      <div className="w-[80%] mt-4 p-4 flex justify-between text-xl rounded-lg items-center border border-neutral-500">
        <div className="items-center flex gap-4">
          <FaEdit />
          <p>Title:{title}</p>
        </div>

        <div className="flex px-4 w-[70%] justify-between items-center">
          <FaCalendarAlt />
          <p>Due Date: {date}</p>

          <div className="flex gap-4">
            <Button
              handleClick={() => console.log("nesto")}
              hoverColor="bg-green-600"
              color="bg-green-500"
            >
              Edit
            </Button>
            <Button
              handleClick={() => console.log("nesto")}
              hoverColor="bg-red-600"
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
              onChange={() => toggleIsTodoFinished(id)}
              className="w-4 h-4 text-blue-600 bg-neutral-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>
      </div>
      <EditTodoForm />
    </>
  );
};

export default Todo;
