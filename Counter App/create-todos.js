import fs from 'fs';

const content = `import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ToDos = () => {
    const [todos, setToDos] = useState([])

    async function fetchData() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        console.log(res.data)
        setToDos(res.data)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div>ToDos</div>
            <ul>
                {
                    todos.map((td, i) => (
                        <li key={i}
                            className={\`\${td.completed ? 'text-success' : 'text-danger'}\`}
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
`;

fs.writeFileSync('./src/Components/todos.jsx', content);
console.log('File created successfully');
