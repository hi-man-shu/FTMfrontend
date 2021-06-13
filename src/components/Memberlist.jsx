import React from 'react'

function memberlist({member}) {
    return (
      <div className="bg-gray-400 rounded-md space-x-1 space-y-1 mb-2 w-full p-2 flex justify-between">
        <span className="text-lg font-sarif font-semibold text-opacity-80">{member.email}</span>
        <span className="bg-green-600 font-mono rounded-xl p-2 font-semibold items-baseline">{member.role}</span>
      </div>
    )
}

export default memberlist
