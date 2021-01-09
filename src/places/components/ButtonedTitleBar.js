import React from 'react'
import EditLocationOutlinedIcon from '@material-ui/icons/EditLocationOutlined';
import HeaderButton from './HeaderButton';
import '../../CSS/components/ButtonedTitledBar.css'

const ButtonTitleBar = (props) => {
    return <div className="header-bar">
        <div className="title-name">
            {props.title}
        </div>
        <div className="location-icon">
            <EditLocationOutlinedIcon />
        </div>
        <div className="title-button-panel">
            {
                Array.from(props.buttonList).map((button) => {

                    return <HeaderButton text={button.text} color={button.color} icon={button.icon} variant={button.variant} path={button.path} />
                })}
        </div>

    </div>
}
export default ButtonTitleBar;