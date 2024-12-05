"use client";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  updateTodo: (id: string, complete: boolean) => void;
};

export default function TodoItem({
  id,
  title,
  complete,
  updateTodo,
}: TodoItemProps): JSX.Element {
  // Returning null means the component won't render anything
  return (
    <li className="flex justify-start items-center border-b border-slate-700 py-2">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onClick={(e) => updateTodo(id, e.currentTarget.checked)}
      />

      <label
        htmlFor={id}
        className={`peer-checked:line-through cursor-pointer ml-2 peer-checked:text-slate-500 ${
          complete ? "text-slate-400" : "text-slate-100"
        }`}
      >
        {title}
      </label>
    </li>
  );
}
