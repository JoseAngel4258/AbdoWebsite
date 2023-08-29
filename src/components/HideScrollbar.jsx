import { useEffect } from "react";

function HideScrollbar() {
  useEffect(() => {
    // Hide the scrollbar when not interacting
    const handleMouseEnter = () => {
      document.body.style.overflowY = "hidden";
    };

    const handleMouseLeave = () => {
      document.body.style.overflowY = "auto";
    };

    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return null;
}

export default HideScrollbar;