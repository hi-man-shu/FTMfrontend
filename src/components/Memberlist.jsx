import React from 'react'

function memberlist({member}) {
    return (
        <div className="text-center text-xl">
            <h1>{member.email}</h1>
        </div>
    )
}

export default memberlist
