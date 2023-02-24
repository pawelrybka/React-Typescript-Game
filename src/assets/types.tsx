export type Todo = {
    id: number;
    text: string;
}
  
export type TodosContextType = {
    todos: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
}

export type ListProps = {
    children: React.ReactNode;
}
