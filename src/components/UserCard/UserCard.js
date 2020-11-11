import React from 'react'
import UserDetail from '../UserDetail/UserDetail';
import './UserCard.css'

export default function UserCard (props) {
    const { login, avatar_url, type, blog, email, bio } = props.user;

    return(
        <div className="UserCard">
            <div className="profile-image">
                <img src={avatar_url} alt={login} />
            </div>
            <div className="profile-details">
                <Link to=``><h3>{ login }</h3></Link>
                <ul>
                    <li><b>Account Type:</b>{ type }</li>
                    <li><b>Blog:</b>{ blog }</li>
                    <li><b>Email:</b>{ email }</li>
                    <li><b>Bio:</b>{ bio }</li>
                </ul>
            </div>
        </div>
    )
}