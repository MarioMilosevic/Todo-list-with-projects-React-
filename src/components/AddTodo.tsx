import { FaFolderPlus } from "react-icons/fa";

interface AddTodoType {
  toggleIsTodoEditing:() => void;
}

const AddTodo = ({toggleIsTodoEditing}:AddTodoType) => {
  return (
      <div className="bg-neutral-200 border border-neutral-500 w-[35%] flex justify-between cursor-pointer items-center py-3 px-6 text-2xl  mt-6 rounded-full hover:bg-neutral-300" onClick={toggleIsTodoEditing}>
        <FaFolderPlus />
        <span>Add Todo</span>
      </div>
  )
}

export default AddTodo
