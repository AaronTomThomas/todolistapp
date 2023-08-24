
"use client"

import { idText } from "typescript"
import { prisma } from "../db"

type TodoItemProps = {
    id: string,
    title: string,
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
    deleteTodo: (id:string) => void
}



export function TodoItem({id, title, complete, toggleTodo, deleteTodo}: TodoItemProps){

    return (<li>
    
    
        <input id = {id} type="checkbox" className={`hidden peer`} 
        defaultChecked = {complete}
        onChange={e => toggleTodo(id, e.target.checked)}/>
        
        <label htmlFor={id} className = {`inline-flex 
        items-center justify-between w-full p-5 bg-white border-2 border-gray-200 
        rounded-lg cursor-pointer dark:hover:text-gray-300
         dark:border-gray-700 peer-checked:border-blue-600 
         hover:text-gray-600 dark:peer-checked:text-gray-600 
         hover:bg-gray-50 dark:text-gray-400 
         dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer 
         peer-checked:line-through
         transition ease-in-out delay-50`}>{title}
            <form name = "delete">
                <button onClick={() => deleteTodo(id)} type = "submit" className= "z-10 rounded hover:bg-red-500 p-2">          
                   <svg xmlns="http://www.w3.org/2000/svg" 
                   fill="none" 
                   viewBox="0 0 24 24" 
                   stroke-width="1.5" 
                   stroke="currentColor"
                    className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                   </svg>
                </button>
            </form>
       </label>
    </li>)
}