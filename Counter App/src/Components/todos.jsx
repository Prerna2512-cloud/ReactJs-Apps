import axios from 'axios'
import { useEffect, useState } from 'react'

const ToDos = () => {
    const [todos, setToDos] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then((res) => {
                console.log(res.data)
                setToDos(res.data)
            })
    }, [])

    return (
        <>
            <div>ToDos</div>
            <ul>
                {
                    todos.map((td, i) => (
                        <li key={i}
                            className={`${td.completed ? 'text-success' : 'text-danger'}`}
                        >
                            {td.title}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default ToDos
