export default function supportsIntersectionObserver() {
  if (
    !("IntersectionObserver" in window) &&
    !("IntersectionObserverEntry" in window) &&
    !("intersectionRatio" in window.IntersectionObserverEntry.prototype)
  ) {
    console.log("does not support interceptor");
    return false;
  } else {
    return true;
  }
}
