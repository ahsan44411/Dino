import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Animate the cursor on mouse move
    const onMouseMove = (e) => {
      gsap.to(cursor, {
        duration: 0.2,
        x: e.clientX - 10,
        y: e.clientY - 10,
      });
    };

    // Animate the cursor on mouse enter
    const onMouseEnter = () => {
      gsap.to(cursor, {
        duration: 0.2,
        scale: 1.5,
        opacity: 0.5,
      });
    };

    // Animate the cursor on mouse leave
    const onMouseLeave = () => {
      gsap.to(cursor, {
        duration: 0.2,
        scale: 1,
        opacity: 1,
      });
    };

    // Add event listeners
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      // Remove event listeners
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor">
      {/* You can customize the cursor here */}
    </div>
  );
};

export default CustomCursor;
