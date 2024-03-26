import { FaFolderPlus } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="bg-neutral-500 w-[20%] p-4">
      <h2 className="pt-8 text-center text-4xl font-semibold">Projects</h2>
      <div className="bg-neutral-200 flex justify-between cursor-pointer items-center py-3 px-6 w-[80%] text-2xl mx-auto mt-6 rounded-full hover:bg-neutral-300">
        <FaFolderPlus />
        <span>Add Project</span>
      </div>
    </div>
  );
};

export default Projects;
