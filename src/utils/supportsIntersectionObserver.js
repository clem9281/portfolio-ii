export default function supportsIntersectionObserver() {
  if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
  ) {
    return true;
  } else {
    return false;
  }
}
