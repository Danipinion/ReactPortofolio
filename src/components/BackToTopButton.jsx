import React, { useEffect, useState } from "react";

function BackToTopButton() {
  const [BackToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {BackToTopButton && (
        <button
          className="fixed bottom-16 right-12 text-xl flex bg-cyan-400"
          onClick={scrollUp}
        >
          ⬆️
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
