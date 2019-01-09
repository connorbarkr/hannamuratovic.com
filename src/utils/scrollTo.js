let isNoScrollBrowser = !!(navigator.userAgent.match(/SamsungBrowser/i) ||
                          navigator.userAgent.match(/Trident/i) ||
                          navigator.userAgent.match(/rv:11/i) ||
                          navigator.userAgent.match(/MSIE/i) ||
                          navigator.userAgent.match(/Edge/i) ||
                          navigator.userAgent.match(/Safari/i));

export const scrollTo = (ref, behavior) => {
  console.log(ref);
  isNoScrollBrowser ? window.scrollTo(0, ref.current.offsetTop) :
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: behavior ? behavior : 'auto',
  });
  return;
};
