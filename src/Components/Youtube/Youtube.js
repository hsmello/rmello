  
import React from 'react';
// import './Youtube.css'

export default function YoutubeVideo(props) {
    return (
        <div className="iframe-container"
            style={{
                position:"relative",
                // height:"350px",
                margin: "auto",
                height: "0",
                width: "100%",
                // maxWidth: "170vh",
                // paddingBottom: "350PX",
                paddingBottom: "56.25%"
        }}
        >
            <iframe
                style={{
                    position:"absolute",
                    top:"0",
                    left:"0",
                    width:"100%",
                    height:"100%",
                    maxWidth:"560px",
                    maxHeight:"315px",
                }}
                title="Youtube"
                src={props.src}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}