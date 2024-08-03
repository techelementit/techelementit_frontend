import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface InfiniteCarouselProps {
  children: React.ReactNode;
  className?: string;
  speed?: "fast" | "medium" | "slow";
  direction?: "left" | "right";
}

interface InfiniteCarouselItemProps {
  children: React.ReactNode;
  className?: string;
}

const InfiniteCarouselItem: React.FC<InfiniteCarouselItemProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("w-full h-full overflow-hidden", className)}>
      {children}
    </div>
  );
};

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  children,
  className,
  speed = "medium",
  direction = "left",
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(carousel);
    }

    addAnimation(carousel);
  }, []);

  function addAnimation(carousel: HTMLDivElement | null) {
    if (!carousel) return;

    carousel.setAttribute("data-animated", "true");

    const carouselInner = carousel.querySelector(".carousal_sub_container");
    if (carouselInner) {
      const carouselContent = Array.from(carouselInner.children);
      carouselContent.forEach((item) => {
        const clonedItem = item.cloneNode(true);
        carouselInner.appendChild(clonedItem);
      });
    }
  }

  return (
    <div
      className="carousal_container overflow-hidden carousal_container_mask w-full"
      data-speed={speed}
      data-direction={direction}
      ref={carouselRef}
    >
      <div className={cn("carousal_sub_container overflow-hidden", className)}>
        {React.Children.map(children, (child, index) => (
          <InfiniteCarouselItem key={index}>{child}</InfiniteCarouselItem>
        ))}
      </div>
    </div>
  );
};

export { InfiniteCarousel, InfiniteCarouselItem };
