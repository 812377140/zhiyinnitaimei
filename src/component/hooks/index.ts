import { useCallback, useRef } from 'react';

export const useRefCallback = <T extends (...args: any[]) => any>(fn: T, _?: React.DependencyList) => {
  const ref = useRef(fn);

  ref.current = fn;
  return useCallback((...args: any[]) => {
    const fn = ref.current;
    return fn(...args);
  }, []) as T;
};
