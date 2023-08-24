import Link from "next/link";
import { prisma } from "../db";
import { redirect } from "next/navigation";


async function createTodo(data: FormData) {
    "use server"
    const title = data.get("title")?.valueOf()
    if (typeof title !=="string" || title.length == 0) {
        throw new Error("Invalid title")
    }

    await prisma.todo.create({data: {title, complete: false}})
    redirect("/")

}

export default function Page() {
    return (
        <>
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl">New</h1>
            </header>
            <form action={createTodo} className = "flex flex-col justify-between height">    
                <input type = "text"
                name = "title" 
                className={` border border-gray-600 bg-transparent rounded
                px-2 py-1 outline-none focus-within:border-slate-100
                `}/>

                <div className = "flex gap-2 justify-end">
                    <Link  className = {`w-3/12 text-center mt-2  border border-gray-600
                        text-gray-300 px-2 py-1 rounded-lg
                        transition ease-in-out delay-50
                        hover:bg-slate-700 focus-within:bg-slate-700 
                        outline-none mb-5 text-lg font-medium text-gray-900 dark:text-white`} href ="..">Cancel</Link>
                    <button type = "submit" className = {`w-3/12 mt-2 border border-gray-600
                        text-gray-300 px-2 py-1 rounded-lg
                        transition ease-in-out delay-50
                        hover:bg-slate-700 focus-within:bg-slate-700 
                        outline-none mb-5 text-lg font-medium text-gray-900 dark:text-white`}>Create</button>
                </div>

            </form>
        </>
    )
}