import { useEffect, useState } from "react";

/**
 * Delays updating the value until the user stops changing it.
 * Prevents unstable network behavior.
 */
export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Critical cleanup — prevents memory leaks + ghost updates
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};
