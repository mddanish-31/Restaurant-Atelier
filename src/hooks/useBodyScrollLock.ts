import { useEffect } from 'react';

/**
 * Locks body scroll while `locked` is true. Restores the previous
 * overflow value on unmount/unlock so it composes safely.
 */
export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [locked]);
}