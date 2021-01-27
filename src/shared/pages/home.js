import React from 'react'
import ButtonTitleBar from '../../places/components/ButtonedTitleBar';


const Home = (props) => {
    return <div className="home-page">
        <ButtonTitleBar buttonList={props.buttons} title={props.title} />
    </div>
}
export default Home;