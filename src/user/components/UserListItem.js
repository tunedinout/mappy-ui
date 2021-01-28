import React from 'react'
import UserProfile from './ProfilePicture';
import './UserListItem.css'
const UserListItem = (props) => {
    return <div className="user-list-item-container">
        <UserProfile
            imageSrc={props.imageSrc}
            width={props.width}
            height={props.height}
            username={props.username}
            placesAdded={props.placesAdded}
        />
    </div>
}
export default UserListItem;;