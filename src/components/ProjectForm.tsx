import Button from "./Button";
import { FormEvent } from "react";
import { useState, useRef, useEffect } from "react";
import { projectState } from "../initialState";
import { ProjectState } from "../types/ResumeTypes";

interface ProjectFormTypes {
  toggleIsProjectEditing: () => void;
  addProject:(project:ProjectState) => void
}
const ProjectForm = ({
  toggleIsProjectEditing,
  addProject,
}: ProjectFormTypes) => {
  const [project, setProject] = useState(projectState);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    if (project.title) {
      addProject(project);
      toggleIsProjectEditing();
      setProject(projectState);
    }
  };

  return (
    <form className="bg-neutral-500 p-4 mb-1">
      <input
        ref={inputRef}
        value={project.title}
        onChange={(e) =>
          setProject((prev) => ({
            ...prev,
            title: e.target.value,
            id: crypto.randomUUID(),
          }))
        }
        type="text"
        className="bg-neutral-200 flex justify-between cursor-pointer items-center p-3 px-6 w-[80%] text-2xl mx-auto mt-6 rounded-full hover:bg-neutral-300"
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
