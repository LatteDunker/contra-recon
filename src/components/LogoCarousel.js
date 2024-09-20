import React, { useEffect, useRef } from 'react';

// Dynamically load all images from /img/logos/ directory
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const logos = importAll(require.context('../img/logos', false, /\.(png|jpe?g|svg)$/));

const LogoCarousel = () => {
  const scrollRef = useRef(null);

  // Duplicate the logos to create the infinite scroll effect
  const logosDoubled = [...logos, ...logos];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let isScrolling = true;
    let accumulatedScroll = 0;
    const scrollIncrement = 0.2; // Smaller value for slower scrolling

    const scrollStep = () => {
      if (!isScrolling) return;

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 2;
      }

      accumulatedScroll += scrollIncrement;

      if (accumulatedScroll >= 1) {
        const scrollBy = Math.floor(accumulatedScroll);
        scrollContainer.scrollLeft += scrollBy;
        accumulatedScroll -= scrollBy;
      }

      requestAnimationFrame(scrollStep);
    };

    requestAnimationFrame(scrollStep);

    return () => {
      isScrolling = false;
    };
  }, []);

  return (
    <div className="py-10">
      <div
        ref={scrollRef}
        className="flex space-x-8 overflow-x-auto no-scrollbar p-4"
        style={{ scrollBehavior: 'auto', whiteSpace: 'nowrap' }}
      >
        {logosDoubled.map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <img src={logo} alt={`Logo ${index + 1}`} className="h-16 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
