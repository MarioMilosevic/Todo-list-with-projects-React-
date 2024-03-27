import { ProjectState } from "./types/ResumeTypes";
import { TodoFormState } from "./types/ResumeTypes";

export const projectState: ProjectState = {
  title: "",
  id: "",
  isClicked: false,
};

export const todoState: TodoFormState = {
  title: "",
  id: "",
  isFinished: false,
  date: "",
};
