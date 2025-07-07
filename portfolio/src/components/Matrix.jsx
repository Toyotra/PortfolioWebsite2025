/*
 written by: Lawrence McDaniel

 This is a refactored implementation of the Matrix Raining Letters effect based on this blog post
 https://dev.to/javascriptacademy/matrix-raining-code-effect-using-javascript-4hep


*/
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

const renderMatrix = (ref, color) => {
    let canvas = ref.current;
    let context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana =
        "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "";
    const nums = "";
    const alphabet = katakana + latin + nums;

    const fontSize = 8;
    const columns = canvas.width / fontSize;

    const rainDrops = [];

    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }

    const render = () => {
        context.fillStyle = "rgba(0, 0, 0, 0.03)"; // black w a tiny bit of alpha
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = color ? color : "rgba(240, 5, 6, 0.22)";
        context.font = fontSize + "px monospace";

        for (let i = 0; i < rainDrops.length; i++) {
            // randomize the string of characters to render
            const text = alphabet.charAt(
                Math.floor(Math.random() * alphabet.length)
            );
            context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (
                rainDrops[i] * fontSize > canvas.height &&
                Math.random() > 0.975
            ) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };
    return render;
};

const Matrix = (props) => {
    const ref = useRef();
    const keyName = "mrl-" + props.key;
    const thisClassName = "mrl-container " + props.custom_class;

    const [zoomLevel, setZoomLevel] = useState(window.devicePixelRatio);

    useEffect(() => {
    const handleResize = () => {
      const currentRatio = window.devicePixelRatio;
      setZoomLevel(currentRatio);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


    useEffect(() => {
        const render = renderMatrix(ref, props.color);
        const intervalId = setInterval(render, 30);
        return () => clearInterval(intervalId);
    }, [props.color, zoomLevel]);

    return (
        <React.Fragment>
            <canvas key={keyName} className={thisClassName} ref={ref} />
        </React.Fragment>
    );
};

export default Matrix;
