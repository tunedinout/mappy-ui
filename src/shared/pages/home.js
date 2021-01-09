import React from 'react'
import Group from '@material-ui/icons/Group'
import KeyboardCapslockIcon from '@material-ui/icons/KeyboardCapslock';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ButtonTitleBar from '../../places/components/ButtonedTitleBar';

var buttons = [
    {
        color: "secondary",
        text: "Users",
        icon: <Group />,
        variant: "contained",
        path: "/users"
    },
    {
        color: "Primary",
        text: "Auth",
        icon: <KeyboardCapslockIcon />,
        variant: "contained",
        path: "auth",
    },
    {
        color: "tertiary",
        text: "New",
        icon: <AddCircleIcon />,
        variant: "outlined",
        path: "places/new"
    }
]
const onUsersClick = (event) => {

}
const Home = () => {
    // return <div className="button-titled-bar">
    //     <ButtonTitleBar buttonList={buttons} title="Mappy" />
    // </div>
    return <>
        <ButtonTitleBar buttonList={buttons} title="Mappy" />
    </>
}
export default Home;