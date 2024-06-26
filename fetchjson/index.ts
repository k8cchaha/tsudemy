import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(res => {
  const todo = res.data as Todo

  logTodo(todo.id, todo.title, todo.completed)
})

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The ID is : ${id}
    The Title is : ${title}
    Complete is : ${completed}
  `)
}

