import { useEffect, useState } from 'react';

/**
 * Returns true once the page has scrolled past `threshold` px.
 * Used to switch the navbar from a transparent hero-overlay state
 * to a solid glass surface state.
 */
export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(() =>
    typeof window !== 'undefined' ? window.scrollY > threshold : false,
  );

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > threshold);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}