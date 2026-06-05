"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Wrapper element to render. Defaults to a div. */
  as?: ElementType;
  /** Stagger delay in ms applied once the element enters view. */
  delay?: number;
  className?: string;
};

/**
 * Subtle, one-shot scroll reveal. Adds `.is-visible` to a `.reveal` element
 * the first time it scrolls into view. No-op (renders visible) when the user
 * prefers reduced motion — the CSS guard in globals.css handles the rest.
 */
export default function Reveal({
  children,
  as,
  delay = 0,
  className = "",
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      setSettled(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // After the fade finishes, flatten the element so no transformed
  // compositor layer lingers (prevents mobile scroll paint artifacts).
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setSettled(true), 700 + delay);
    return () => clearTimeout(t);
  }, [visible, delay]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${
        settled ? "is-settled" : ""
      } ${className}`.trim()}
      style={!settled && delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
