import { useState } from 'react';

interface ScrollToTop {
  visible: string;
  scrollToTop: () => void;
}

function useScrollToTop(): ScrollToTop {
  const [visible, setVisible] = useState('');

  const toggleVisible = (): void => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 700) {
      setVisible('enable');
    } else if (scrolled <= 700) {
      setVisible('disable');
    }
  };

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return { visible, scrollToTop };
}

export default useScrollToTop;
