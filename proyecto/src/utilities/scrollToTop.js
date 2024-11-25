export const scrollToTop = (behavior = 'smooth', top = 0) => {
  window.scrollTo({
    top,
    behavior
  })
}
