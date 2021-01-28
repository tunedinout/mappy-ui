import "./ProfilePicture.css";
import PlaceIcon from '@material-ui/icons/Place';
import React, { useEffect, useRef, useState } from "react";

export default function UserProfile(props) {
    const [image, setImage] = useState(null);
    const canvasRef = useRef(null);
    // const contextRef = useRef(null);
    // contextRef.current = canvasRef.current.getContext("2d");

    useEffect(() => {
        const pImg = new Image();
        pImg.src = props.imageSrc;
        pImg.onload = () => setImage(pImg);
    }, []);

    useEffect(() => {
        if (image && canvasRef) {
            const ctx = canvasRef.current.getContext("2d");
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, props.width, props.height);
            // ctx.fill();
            ctx.drawImage(image, 0, 0, props.width, props.height);
        }
    }, [image, canvasRef]);
    return (
        <div className="canvas_test_container grid-container">
            <canvas
                className="canvas_test grid-item"
                ref={canvasRef}
                width={props.width}
                height={props.height}
            />
            <div className="user-details grid-item grid-container-details">
                <div className="user-list-item-name grid-item-details">
                    {props.username}
                </div>
                <div className="user-list-item-places grid-item-details">
                    {props.placesAdded}
                </div>

            </div>
            <div className="user-list-places-button grid-item">
                <PlaceIcon fontSize="large" color="green" />
            </div>
        </div>
    );
}
