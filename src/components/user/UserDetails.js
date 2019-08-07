import React from 'react'


function UserDetails({match}) {
    return (
        <div className="mt-5 pt-5">
          <h1>UserDetails</h1>
          <h3>ID:{match.params.uid}</h3>
      </div>
    )
}

export default UserDetails
