import React from 'react';
import ButtonTitleBar from '../../places/components/ButtonedTitleBar';
import UserListItem from '../components/UserListItem';
import './Users.css'

const Users = (props) => {
    return <div className="users-page">
        <ButtonTitleBar buttonList={props.buttons} title={props.title} />
        <div className="users-page-userlist" >
            {

                props.users.map((user) => {
                    return <UserListItem
                        imageSrc={user.imageSrc}
                        width={user.profileImageWidth}
                        height={user.profileImageHeight}
                        username={user.username}
                        placesAdded={user.placesAdded}
                    />
                })
            }

        </div>

    </div >

}

export default Users;