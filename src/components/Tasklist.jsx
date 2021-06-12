import React from 'react'

function Tasklist({task}) {
    return (
        <div className="text-center text-xl">
            <h1>{task.title}</h1>
            <h1>{task.description}</h1>
            <h1>{task.date}</h1>
            <h1>{task.assign}</h1>
        </div>
    )
}

export default Tasklist
