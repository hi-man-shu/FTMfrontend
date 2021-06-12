import React from 'react'

function memberlist({member}) {
    return (
      <div className="w-half object-cover object-center text-center bg-center text-gray-700 border-red-600 border-solid border-opacity-100 border-1 rounded-lg hover:bg-black hover:text-white">
         <h1>{member.email}</h1>
         <h1>{member.familyId}</h1>
         <h1>{member.role}</h1>
      </div>
    )
}

export default memberlist
