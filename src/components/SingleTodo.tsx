import React, { useEffect, useRef, useState } from "react";
import { todo } from "../types";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  item: todo;
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
}

const SingleTodo = ({ item, setTodos }: Props) => {
  const [edit, setEdit] = useState<Boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(item.todo);
  useEffect(() => {
    setEditTodo(item.todo);
  }, [edit, item.todo]);

  const handleDone = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
  };
  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === id ? { ...t, todo: editTodo } : t))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="px-4 py-2 flex justify-between items-center font-semibold bg-orange-400 w-1/2 rounded-lg"
      onSubmit={(e) => handleEdit(e, item.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          className="bg-transparent outline-none text-xl"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : item.isDone ? (
        <s>
          <p className="text-xl">{item.todo}</p>
        </s>
      ) : (
        <p className="text-xl">{item.todo}</p>
      )}
      <div className="icons text-lg text-gray-800 flex space-x-2">
        <span
          className="icon text-xl bg-orange-500  font-bold p-1 rounded-md"
          onClick={() => {
            if (!edit && !item.isDone) setEdit(!edit);
          }}
        >
          <AiFillEdit />
        </span>
        <span
          className="icon bg-orange-500 font-bold p-1 rounded-md"
          onClick={() => handleDelete(item.id)}
        >
          <AiFillDelete />
        </span>
        <span
          className="icon bg-orange-500 font-bold p-1 rounded-md"
          onClick={() => handleDone(item.id)}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
