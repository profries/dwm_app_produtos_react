import React from 'react';
import { useState } from 'react';
import frontline from '../res/Home_Desk-frontline.jpg';
import kaminha from '../res/Home_Desk_Kaminha.jpg';



function Carroussel(props) {
    const [slideIndex, setSlideIndex] = useState(1);
    const length = 2;

    function plusDivs(n) {
        let index = slideIndex+n;        
        if (index > length) { index = 1 }
        if (index < 1) {index = length}        
        setSlideIndex(index);
    }

    return (
        <section className="w3-content w3-display-container" style={{maxWidth: "120%"}} >
            <img className="mySlides" alt="frontline" src={frontline} style={{display: (slideIndex ===1) ?'block' :'none', width: "100%"}} />
            <img className="mySlides" alt="kaminha" src={kaminha} style={{display:(slideIndex ===2) ?'block' :'none', width: "100%"}} />

            <div className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style={{width: "100%"}}>
                <div onClick= {() => plusDivs(-1)} className="w3-left w3-hover-text-khaki" >&#10094;</div>
                <div onClick= {() => plusDivs(1)} className="w3-right w3-hover-text-khaki">&#10095;</div>
                <span className="w3-badge demo w3-border w3-transparent w3-hover-white"></span>
                <span className="w3-badge demo w3-border w3-transparent w3-hover-white"></span>
            </div>
        </section>
    )
}

export default Carroussel;