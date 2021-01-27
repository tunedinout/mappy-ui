import React from 'react';
import ButtonTitleBar from '../../places/components/ButtonedTitleBar';
import UserListItem from '../components/UserListItem';
import './Users.css'

const Users = (props) => {
    return <div className="users-page">
        <ButtonTitleBar buttonList={props.buttons} title={props.title} />
        <UserListItem />
    </div>

}

export default Users;