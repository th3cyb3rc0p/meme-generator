import React from "react";
// import { Link } from "react-router-dom";
export default function Image(prop) {
    return (
        <div className="img" key={prop.name}>
            <a href={`/customize/:${prop.name}`}>
                <img
                    src={`https://api.memegen.link/images/${prop.name}/${prop.top}/${prop.down}.png?height=350&width=300`}
                    onClick={prop.click(prop.name)}
                    alt="meme"
                />
            </a>
        </div>
    );
}
