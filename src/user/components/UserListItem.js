import React from 'react'
import ProfilePicture from './ProfilePicture';
import './UserListItem.css'
const UserListItem = (props) => {
    return <div className="user-list-item-container">
        <ProfilePicture />
        {/* <div className="user-details">
            <div className="user-list-item-name">
                user-name
            </div>
            <div className="user-list-item-places">
                14
            </div>
        </div> */}
    </div>
}
export default UserListItem;;