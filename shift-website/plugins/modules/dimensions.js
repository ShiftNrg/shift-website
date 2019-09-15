// Set the --vh without the navbar for mobile
function calculateHeight() {
  const vh = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  )
  document.documentElement.style.setProperty('--vh', vh + 'px')
}

// window.addEventListener('resize', calculateHeight);
calculateHeight()
