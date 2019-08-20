let isNoScrollBrowser = !!(
                          (navigator.userAgent.match(/SamsungBrowser/i) ||
                          navigator.userAgent.match(/Trident/i) ||
                          navigator.userAgent.match(/rv:11/i) ||
                          navigator.userAgent.match(/MSIE/i) ||
                          navigator.userAgent.match(/Edge/i) ||
                          navigator.userAgent.match(/Safari/i)) &&
                        !navigator.userAgent.match(/Chrome/i));

export const scrollTo = (ref, snap = false) => {
  if (ref === 0) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  if (ref && ref.current) {
    isNoScrollBrowser || snap ? window.scrollTo(0, ref.current.offsetTop) :
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  }
};
