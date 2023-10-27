import { useState } from 'react';
import { SIZE } from 'src/constants/responsive';

import useEventListener from '../useEventListener/useEventListener';
import useIsomorphicLayoutEffect from '../useIsomorphicLayoutEffect/useIsomorphicLayoutEffect';

interface WindowSize {
  width: number;
  height: number;
  isMobile: boolean;
}

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
    isMobile: false,
  });

  const handleSize = (): void => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;

    const isMobile =
      Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)) ||
      window.innerWidth < SIZE.LG;

    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile,
    });
  };

  useEventListener('resize', handleSize);

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleSize();
  }, []);

  return windowSize;
}

export default useWindowSize;
