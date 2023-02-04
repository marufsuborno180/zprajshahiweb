import React from 'react'
import audio from "../assets/media/bd_national_anthem.mp3"

function AudioComp({tittle, reg}) {
    return (
        <>
            <div className="memderCard mb-2 audioBox">
                <div className="tittle">{tittle}</div>
                <div className="audio">
                    <audio loop controls src={audio}></audio>
                </div>
                <div className="reg"><span>{reg}</span></div>
            </div>
        </>
    )
}

export default AudioComp