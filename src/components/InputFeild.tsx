interface PropsTypes {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

function InputFeild({ todo, setTodo, handleAdd }: PropsTypes) {
  return (
    <form className="flex items-center justify-center" onSubmit={handleAdd}>
      <input
        className="w-1/2 text-3xl p-4 rounded-full focus:outline-0"
        type="text"
        placeholder="Task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className=" absolute right-20 sm:right-32 md:right-[12.5rem] lg:right-[16.5rem] xl:right-[23rem] 2xl:right-[30.5rem] shadow shadow-lg text-white bg-orange-500 w-16 h-16 rounded-full "
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default InputFeild;
