import Button from "./Button"

interface ProjectFormTypes {
  toggleIsProjectEditing:() => void;
}
const ProjectForm = ({toggleIsProjectEditing} : ProjectFormTypes) => {
  return (
    <div className="bg-neutral-500 p-4">
    <input type="text" className="bg-neutral-200 flex justify-between cursor-pointer items-center p-3 px-6 w-[80%] text-2xl mx-auto mt-24 rounded-full hover:bg-neutral-300">
    </input>
    <div className="flex gap-4 w-[80%] mx-auto mt-2">
        <Button handleClick={() => console.log("nesto")} hoverColor="hover:bg-green-600" color="bg-green-500">Add</Button>
        <Button handleClick={toggleIsProjectEditing} hoverColor="hover:bg-red-600" color="bg-red-500">Cancel</Button>
    </div>
  </div>
  )
}

export default ProjectForm

