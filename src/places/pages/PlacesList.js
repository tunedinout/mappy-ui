import React from 'react'
import ButtonTitleBar from '../components/ButtonedTitleBar';

const PlacesList = (props) => {
    return <div className="places-page">
        <ButtonTitleBar buttonList={props.buttons} title={props.title} />
        <h1>
            Places List view.
        </h1>
    </div>
}
export default PlacesList;