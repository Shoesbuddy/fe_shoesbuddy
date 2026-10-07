"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function SmoothScroll() {
  const pathaname = usePathname();
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      syncTouch: true,
    });

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, [pathaname]);

  return null;
}
