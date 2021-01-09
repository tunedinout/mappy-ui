import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import '../../CSS/components/HeaderButtonStyles.css'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory();
const HeaderButton = (props) => {
    return <div className="button-header-container">
        <Link to={props.path}>
            <Button variant="contained" color={props.color} className="header-buttons" variant={props.variant} onClick={() => history.push("/users")}>
                {props.text}
                {props.icon}
            </Button>
        </Link>

    </div >
}
export default HeaderButton;