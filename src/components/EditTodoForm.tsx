import Button from "./Button";
const EditTodoForm = () => {
  return (
    <>
      <div className="w-[70%] mt-4">
        <div className="p-4 flex justify-between text-xl rounded-lg items-center border border-red-500">
          <div className="items-center flex gap-4">
            <p>Title:</p>
          </div>

          <div className="flex px-4 w-[70%] justify-between items-center">
            <p>Due Date: </p>

            <div className="flex gap-4"></div>

            <div className="flex items-center justify-end">
              <input
                id="checked-checkbox"
                type="checkbox"
                checked={true}
                //   onChange={() => toggleIsTodoFinished(id)}
                className="w-4 h-4 text-blue-600 bg-neutral-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>
        </div>
          <div className="flex p-4 border border-black">
            <Button color={"bg-green-500"}>Save</Button>
            <Button color={"bg-red-500"}>Cancel</Button>
          </div>
      </div>
    </>
  );
};

export default EditTodoForm;
