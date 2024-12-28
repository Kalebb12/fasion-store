import { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Slider = ({ children , pending= false }) => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollHandler = (direction) => {
    const slider = sliderRef.current;

    if (slider) {
      const scrollAmount = slider.offsetWidth;
      const newScrollPosition =
        direction === "forward"
          ? slider.scrollLeft + scrollAmount
          : slider.scrollLeft - scrollAmount;

      slider.scrollTo({ left: newScrollPosition,behavior: 'smooth' });

      // Update button states after scroll
      setTimeout(() => {
        setCanScrollLeft(slider.scrollLeft > 0);
        setCanScrollRight(
          slider.scrollWidth - slider.scrollLeft > slider.offsetWidth
        );
      }, 300); // Delay to account for smooth scroll
    }
  };


  return (
    <div className="flex flex-col items-center gap-5">
      <div
        ref={sliderRef}
        className="flex w-full gap-6 overflow-x-auto"
        id="scroll-container"
      >
        {children}
      </div>
      {!pending?
         <div className="flex items-center gap-3">
        <button
          className={`w-10 h-10 border-gray-500 border flex items-center justify-center rounded-[4] ${!canScrollLeft ? "text-gray-400" : ""}`}
          onClick={() => scrollHandler("backward")}
          disabled={!canScrollLeft}
                  
        >
          <IoIosArrowBack/>
        </button>

        <button
          className={`w-10 h-10 border-gray-500 border flex items-center justify-center rounded-[4] ${!canScrollRight ? "text-gray-400" : ""}`}
          onClick={() => scrollHandler("forward")}
          disabled={!canScrollRight}
        >
          <IoIosArrowForward />
        </button>
      </div>:null}
    </div>
  );
};

export default Slider;
