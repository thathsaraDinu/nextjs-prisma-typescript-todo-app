import { prisma } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf() as string;
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title");
  }
  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/..");
}

export default function Home() {
  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2x.5">GetItDone</h1>
      </header>
      <form action={createTodo} className="flex flex-col gap-2">
        <label htmlFor="title" className="text-2xl">
          Title
        </label>
        <input
          className="px-2 py-1 rounded text-slate-700"
          type="text"
          id="title"
          name="title"
        />
        <div className="flex justify-end gap-2">
          <button
            className="outline-none px-2 py-1 border border-slate-100 rounded"
            type="submit"
          >
            Create
          </button>
          <Link
            className="outline-none px-2 py-1 border border-slate-100 rounded"
            href=".."
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
