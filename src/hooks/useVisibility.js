import { useEffect, useState } from "react";
import supportsIntersectionObserver from "../utils/supportsIntersectionObserver";

/**
 * @param {Element} ref ref to the element you want watched
 * @returns {boolean} boolean describing whether element is visible or not
 * @description tracks if an element has been scrolled to, returning if it is visible or not
 */
const useVisibility = (ref) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (supportsIntersectionObserver()) {
      const current = ref.current;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // older browsers may support the intersection observer, but isIntersecting may not work, it may just return undefined
          if (entry.isIntersecting !== undefined) {
            setIsVisible(entry.isIntersecting);
          } else {
            setIsVisible(true);
          }
        });
      });
      observer.observe(current);
      return () => observer.unobserve(current);
    } else {
      setIsVisible(true);
    }
  }, [ref]);
  return isVisible;
};
export default useVisibility;
