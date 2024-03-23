import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(res => {
  const todo = res.data as Todo

  console.log(`
    The ID is : ${todo.id}
    The Title is : ${todo.title}
    Complete is : ${todo.completed}
  `)
})

