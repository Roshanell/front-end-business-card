import React from "react"

export default function Info() {
    return (
        <div>
            <div className="info-photo-container">
                <img alt="https://i.pravatar.cc/600"src="https://i.imgur.com/UQlLLd4.jpg" className="photo"/>
            </div>
            <div className="info-text">
                <h1>Roshanell Francisco</h1>
                <p className="info-subtitle">Frontend Developer</p>
                <p className="personal-website">https://roshanellfrancisco.netlify.app/</p>
                <div>
                    <button className="button-light"><a href="mailto:roshanellf@gmail.com"><img src="https://i.imgur.com/d6QwToM.png" className="icon"/>Email </a></button>
                    <button className="button-contrast"> <a href="https://www.linkedin.com/in/roshanellfrancisco/"><img src="https://i.imgur.com/mN19Ao7.png" className="linkedin-icon icon"/>LinkedIn</a></button>
                </div>
            </div>
        </div>
    )
}
