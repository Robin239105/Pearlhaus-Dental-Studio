import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export function useScrollReveal(threshold = 0.1, once = true) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: once });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  return { ref, controls, inView };
}
export default useScrollReveal;
