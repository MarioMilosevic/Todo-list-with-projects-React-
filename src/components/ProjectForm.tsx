import Button from "./Button";
import { useState } from "react";
interface ProjectFormTypes {
  toggleIsProjectEditing: () => void;
  addProject: (inputValue:string) => void;
}
const ProjectForm = ({
  toggleIsProjectEditing,
  addProject,
}: ProjectFormTypes) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    addProject(inputValue);
  };

  return (
    <form className="bg-neutral-500 p-4">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        className="bg-neutral-200 flex justify-between cursor-pointer items-center p-3 px-6 w-[80%] text-2xl mx-auto mt-24 rounded-full hover:bg-neutral-300"
      ></input>
      <div className="flex gap-4 w-[80%] mx-auto mt-2">
        <Button
          handleClick={handleSubmit}
          hoverColor="hover:bg-green-600"
          color="bg-green-500"
        >
          Add
        </Button>
        <Button
          handleClick={toggleIsProjectEditing}
          hoverColor="hover:bg-red-600"
          color="bg-red-500"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default ProjectForm;
