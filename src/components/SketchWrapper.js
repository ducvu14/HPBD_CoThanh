import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import sketch from '../sketch';

const SketchWrapper = ({ text }) => {
    const sketchRef = useRef(null);

    useEffect(() => {
        const sketchInstance = new p5(sketch(sketchRef.current, text), sketchRef.current);

        return () => {
            sketchInstance.remove();
        };
    }, [text]);

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundImage: 'url("./pngtree-gradient-purple-galaxy-constellations-background-picture-image_1244238.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.7,
        }}>
            <div ref={sketchRef} style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                mixBlendMode: 'screen',
                filter: 'brightness(1.2) contrast(1.1)',
            }} />
        </div>
    );
};

export default SketchWrapper;
