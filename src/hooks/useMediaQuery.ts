import { useState, useEffect, useCallback } from "react";

const useMediaQuery = (minWidth: number): boolean => {
  const query = `screen and (min-width: ${minWidth}px`;

  const doesMediaMatches = useCallback((): boolean => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia(query).matches;
  }, [query]);

  const [matches, setMatches] = useState(doesMediaMatches());

  const handleSetMatches = useCallback(() => {
    setMatches(doesMediaMatches());
  }, [doesMediaMatches]);

  useEffect(() => {
    handleSetMatches();

    window.addEventListener("resize", handleSetMatches);

    return () => {
      window.removeEventListener("resize", handleSetMatches);
    };
  }, [handleSetMatches]);

  return matches;
};

export { useMediaQuery };
