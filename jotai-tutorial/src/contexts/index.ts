import { useState, useCallback } from 'react';
import constate from 'constate';

export const [CounterProvider, useCountContext] = constate(
  ({ initialCount = 0 }: { initialCount?: number }) => {
    const [contextCount, setContextCount] = useState(initialCount);

    const incrementCount = useCallback(() => setContextCount(prev => prev + 1), []);
    const decrementCount = useCallback(() => setContextCount(prev => prev - 1), []);

    return {
      contextCount,
      setContextCount,
      incrementCount,
      decrementCount,
    };
  },
);
