
import React, { useState, useEffect } from 'react';
import backgroundScreen from '../assets/backgroundScreen.jpg';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';
import p7 from '../assets/p7.png';
import p8 from '../assets/p8.png';
import p9 from '../assets/p9.png';
import p10 from '../assets/p10.png';




function MainContent() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loopCount, setLoopCount] = useState(0);
    const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

    useEffect(() => {
        if (loopCount < 5) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => {
                    const nextIndex = (prevIndex + 1) % images.length;
                    if (nextIndex === 0) {
                        setLoopCount(prev => prev + 1);
                    }
                    return nextIndex;
                });
            }, 1000); // Change image every 1 second

            return () => clearInterval(interval);
        }
    }, [currentImageIndex, loopCount, images.length]);

    return (
        <>
            <div className="p-6 relative">
                <img src={backgroundScreen} alt="Main Content" className="w-full h-auto rounded-lg shadow-md" />
                {loopCount < 5 && (
                    <img
                        src={images[currentImageIndex]}
                        alt="pavan"
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-22 h-auto'
                    />
                )}
            </div>
        </>
    )
}

export default MainContent;