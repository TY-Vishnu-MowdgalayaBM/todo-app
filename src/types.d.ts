type Todos = {
    id: number;
    text: string;
    day: string;
    reminder: boolean;
};

type NewTodos = {
    text: string;
    day: string;
    reminder: boolean;
};

type deleteTask = (id: number) => void;

type toggleTask = (id: number) => void;

type addTask = (task: NewTodos) => void
