import React, { useEffect, useState } from "react";
import ScrollUp from "../../assets/scroll-up.png";
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scrollToTop">
      {isVisible && (
        <div onClick={scrollToTop}>
          <img src={ScrollUp} alt="" />
        </div>
      )}
    </div>
  );
}
