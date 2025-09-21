import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash (#id) in the URL, scroll to that element
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // small delay lets the page layout finish first
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "auto", block: "start" }));
        return;
      }
    }
    // otherwise, always go to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
