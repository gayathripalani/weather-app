export const scrollToRef = (ref: any) => {
  window.scrollTo({
    behavior: 'smooth',
    top: ref.current.offsetTop,
  });
};
