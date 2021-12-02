
import React, { useState, useEffect } from 'react';
import "./progressbar.scss";

function ProgressBar() {

    useEffect(() => {

        window.addEventListener("scroll", progressBarHandler);
    });

    const [scroll, setScroll] = useState(0);

    let progressBarHandler = () => {

        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = `${totalScroll / windowHeight}`;

        setScroll( scroll );
    }


  return (
    <div className="progressBarContainer">
        <div className="progressBarline" style={{transform: `scale(${scroll}, 1)`}}/>
    </div>
  );
}

export default ProgressBar;
