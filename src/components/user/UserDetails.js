import React from 'react'


function UserDetails({ match }) {
    return (
        <div className="mt-5 pt-5">
            <h2>User Datils</h2>
            <p>UserID : {match.params.id}</p>

        </div>
    )
}

export default UserDetails
