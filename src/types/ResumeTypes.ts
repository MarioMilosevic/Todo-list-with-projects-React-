export type ProjectState = {
    title: string;
    id: string;
    isClicked: boolean;
    todos:TodoFormState[]
};

export type TodoFormState = {
    title: string;
    id: string;
    isFinished: boolean;
    date: string;
};



