import { useState, useEffect } from 'react';

const useDebounce = (value: any, time: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, [value, time]);

  return debounceValue;
};

export default useDebounce;
