import React from 'react'

export default function UserDetail () {
    const { login, avatar_url, organizations_url } = user;

    return(
        <div className="UserDetail">
            <div className="profile-image">
                <img src={avatar_url} alt={login} />
            </div>
            <h3>{ login }</h3>
            {/* <ul>
                <li></li>
                <li></li>
            </ul>
             */}

        </div>

    )
}