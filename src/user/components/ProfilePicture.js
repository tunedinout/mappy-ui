import "./ProfilePicture.css";
import React, { useEffect, useRef, useState } from "react";

const imgData = {
    URL: "https://pyxis.nymag.com/v1/imgs/411/c95/f56811cafc00d7a8c9e4f9c44caa23d805-25-curb-your-enthusaism-costume-new-lede.rsquare.w700.jpg",
    width: "100",
    height: "100"
}

export default function ProfilePicture() {
    const [image, setImage] = useState(null);

    const canvasRef = useRef(null);
    // const contextRef = useRef(null);
    // contextRef.current = canvasRef.current.getContext("2d");

    useEffect(() => {
        const pImg = new Image();
        pImg.src = imgData.URL;
        pImg.onload = () => setImage(pImg);
    }, []);

    useEffect(() => {
        if (image && canvasRef) {
            const ctx = canvasRef.current.getContext("2d");
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, imgData.width, imgData.height);
            // ctx.fill();
            ctx.drawImage(image, 0, 0, imgData.width, imgData.height);
        }
    }, [image, canvasRef]);
    return (
        <div className="canvas_test_container">
            <canvas
                className="canvas_test"
                ref={canvasRef}
                width={imgData.width}
                height={imgData.height}
            />
        </div>
    );
}
