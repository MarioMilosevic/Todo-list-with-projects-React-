import Button from "./Button"
const ProjectForm = () => {
  return (
    <div className="bg-neutral-500 w-[20%] p-4">
    <input type="text" className="bg-neutral-200 flex justify-between cursor-pointer items-center p-3 px-6 w-[80%] text-2xl mx-auto mt-24 rounded-full hover:bg-neutral-300">
    </input>
    <div className="border border-black flex">
        <Button hoverColor="hover:bg-green-500" color="bg-green-400">Add</Button>
        <Button hoverColor="hover:bg-red-500" color="bg-red-400">Cancel</Button>
    </div>
  </div>
  )
}

export default ProjectForm

// className="border-2 bg-slate-50 border-slate-300 cursor-pointer focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-300 px-4 py-2 w-full rounded-md"
