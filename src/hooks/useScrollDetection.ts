import { useEffect, useState } from "react";

/**
 * Custom hook for detecting scroll position relative to a threshold
 *
 * @param threshold - The scroll threshold in pixels (default: 50)
 * @returns boolean indicating whether the scroll position exceeds the threshold
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const isScrolled = useScrollDetection(50);
 *
 *   return (
 *     <nav className={isScrolled ? 'scrolled' : ''}>
 *       {/* ... *\/}
 *     </nav>
 *   );
 * }
 * ```
 */
export function useScrollDetection(threshold = 50): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Initial check to set correct state on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    threshold,
  ]);

  return isScrolled;
}
