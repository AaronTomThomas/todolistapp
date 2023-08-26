This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Description

First part of the todo-list has followed a tutorial designed for education on Next.js 13: https://www.youtube.com/watch?v=NgayZAuTgwM

Modified the original project by adding a delete button to manage the number of todo items, also modified the original style using tailwind.css.

Utilised prisma as a database to manage the todo-items as well as ensure that they are saved on page reload by managing communication between
client and server.

...
#Run to install dependencies
'npm install'

to set up prisma db, 'npx prisma generate' and/or 'npx prisma migrate dev --name init'

#Creating environment for DB

create a .env file with contents "DATABASE_URL = "file:./dev.db"

The database should then be in sync with the schema in prisma/schema.prisma

'npm run dev' to run in local host

