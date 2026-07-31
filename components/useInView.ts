"use client";

import { useEffect, useRef } from "react";

/**
 * Fires `onEnter` once the element is in view.
 *
 * Anything already on screen at mount fires synchronously rather than waiting
 * on IntersectionObserver — browsers throttle IO on hidden/background pages,
 * and reveal styles start at opacity 0, so a deferred callback would leave the
 * page blank until the tab is focused.
 */
export function useInView<T extends HTMLElement>(
  onEnter: () => void,
  { threshold = 0.12, rootMargin = "0px 0px -8% 0px" } = {}
) {
  const ref = useRef<T>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || fired.current) return;

    const enter = () => {
      if (fired.current) return;
      fired.current = true;
      onEnter();
    };

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      enter();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            enter();
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
