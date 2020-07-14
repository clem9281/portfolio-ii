export default function supportsIntersectionObserver() {
  if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
  ) {
    console.log("does support intercector");
    return true;
  } else {
    console.log("does not support intersector");
    return false;
  }
}
