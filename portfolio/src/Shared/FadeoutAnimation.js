import React, { useEffect, useState } from "react";
import "../SharedStyle/FadeoutAnimation.css";
export default function FadeoutAnimation(props) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className={`scale-up-component ${isVisible ? "scale-up" : ""}`}>
      {props.children}
    </div>
  );
}
