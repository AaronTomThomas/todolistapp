import Link from "next/link";
import { prisma } from "./db";
import { TodoItem } from "./components/TodoItem";

function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({
    where: {id}, data: {complete}
  })
}

async function deleteTodo(id: string) {
  "use server"
  try {
    await prisma.todo.delete({
      where: { id }
    });
    console.log(`Todo with ID ${id} deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting todo with ID ${id}:`, error);
  }
}
export default async function Home() {

  //getting our todos from the prisma database
  

  const todos = await getTodos()


  return <h1>
    <header className="flex justify-between">
      <h1 className="font-sans mb-5 text-lg font-medium text-gray-900 dark:text-white">Todos</h1>
      <Link className="font-sans border border-gray-600
      text-gray-300 px-2 py-1 rounded
      transition ease-in-out delay-50
      hover:bg-slate-700 focus-within:bg-slate-700 
      outline-none mb-5 text-lg font-medium text-gray-900 dark:text-white
      "
      href = "/new">New</Link>
    </header>
    <ul className = {`
    grid w-full gap-6 md:grid-cols-3`}>
        {todos.map(todo =>
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>)}
    </ul>
  </h1>

}


