import { FaFolderPlus } from "react-icons/fa";

interface AddProjectTypes {
  toggleIsProjectEditing:() => void
}

const AddProject = ({toggleIsProjectEditing}:AddProjectTypes) => {
  return (
    <div className="bg-neutral-500 p-4" onClick={toggleIsProjectEditing}>
      <div className="bg-neutral-200 flex justify-between cursor-pointer items-center py-3 px-6 w-[80%] text-2xl mx-auto mt-6 rounded-full hover:bg-neutral-300">
        <FaFolderPlus />
        <span>Add Project</span>
      </div>
    </div>
  );
};

export default AddProject;
