import { todo } from "../types";
import SingleTodo from "./SingleTodo";

interface PropsTodos {
  todos: todo[];
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
}

const TodoList: React.FC<PropsTodos> = ({ todos, setTodos }) => {
  return (
    <div className="flex flex-col items-center justify-center my-4 space-y-4 ">
      {todos.map((t) => (
        <SingleTodo item={t} setTodos={setTodos} todos={todos} key={t.id} />
      ))}
    </div>
  );
};

export default TodoList;
