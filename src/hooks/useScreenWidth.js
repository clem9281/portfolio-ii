import { useEffect, useState } from "react";

const useScreenWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const listener = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [setWidth]);
  return width;
};
export default useScreenWidth;
