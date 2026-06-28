import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ end, duration = 2000, suffix = "", decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        let startTime = null;

        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;

          const progress = Math.min((timestamp - startTime) / duration, 1);

          const easeOut = 1 - Math.pow(1 - progress, 3);
          const value = easeOut * end;

          setCount(value);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.4,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
