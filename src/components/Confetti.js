import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const Confetti = () => {
    const confettiRef = useRef(null);

    useEffect(() => {
        const sketch = (p) => {
            let confetti = [];

            p.setup = () => {
                p.createCanvas(p.windowWidth, p.windowHeight);
                for (let i = 0; i < 100; i++) {
                    confetti.push(new Particle());
                }
            };

            p.draw = () => {
                p.clear();
                confetti.forEach((particle) => {
                    particle.update();
                    particle.display();
                });
            };

            class Particle {
                constructor() {
                    this.x = p.random(p.width);
                    this.y = p.random(-100, -10);
                    this.size = p.random(4, 16);
                    this.color = p.color(p.random(255), p.random(255), p.random(255), 150);
                    this.speedY = p.random(1, 3);
                    this.speedX = p.random(-0.5, 0.5);
                }

                update() {
                    this.y += this.speedY;
                    this.x += this.speedX;
                    if (this.y > p.height) {
                        this.y = p.random(-100, -10);
                        this.x = p.random(p.width);
                    }
                }

                display() {
                    p.noStroke();
                    p.fill(this.color);
                    p.ellipse(this.x, this.y, this.size);
                }
            }

            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            };
        };

        const p5Instance = new p5(sketch, confettiRef.current);

        return () => {
            p5Instance.remove();
        };
    }, []);

    return <div ref={confettiRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />;
};

export default Confetti;
