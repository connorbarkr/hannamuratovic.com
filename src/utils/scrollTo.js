let isNoScrollBrowser = !!(navigator.userAgent.match(/SamsungBrowser/i) ||
                          navigator.userAgent.match(/Trident/i) ||
                          navigator.userAgent.match(/rv:11/i) ||
                          navigator.userAgent.match(/MSIE/i) ||
                          navigator.userAgent.match(/Edge/i) ||
                          navigator.userAgent.match(/Safari/i));

export const scrollTo = (ref, snap = false) => {
  console.log(ref.current.offsetTop)
  if (ref && ref.current) {
    isNoScrollBrowser || snap ? window.scrollTo(0, ref.current.offsetTop) :
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  }
};
