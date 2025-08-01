import React, { useEffect, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [outlinePosition, setOutlinePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Smooth transition for outline
            setTimeout(() => {
                setOutlinePosition({ x: e.clientX, y: e.clientY });
            }, 50);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            {/* Inner Dot */}
            <div
                style={{
                    position: "fixed",
                    top: position.y,
                    left: position.x,
                    width: "8px",
                    height: "8px",
                    backgroundColor: "rgba(48, 44, 44, 0.5)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1000,
                }}
            />
            {/* Outer Ring */}
            <div
                style={{
                    position: "fixed",
                    top: outlinePosition.y,
                    left: outlinePosition.x,
                    width: "35px",
                    height: "35px",
                    border: "2px solid rgba(48, 44, 44, 0.5)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    transform: "translate(-50%, -50%)",
                    transition: "all 0.1s ease-out",
                    zIndex: 999,
                }}
            />
        </>
    );
};

export default CustomCursor;
