import { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import { todo } from "./types";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), todo, isDone: false },
    ]);
    setTodo("");
  };

  return (
    <div className="bg-gray-800 h-screen ">
      <div className=" flex justify-center text-center flex-col space-y-5">
        <span className="text-white text-5xl my-4 p-2">T a s k i f y</span>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      </div>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
