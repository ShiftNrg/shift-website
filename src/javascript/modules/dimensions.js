// Set the --vh without the navbar for mobile
function calculateHeight()
{
    var vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', vh + "px");
}
window.addEventListener('resize', calculateHeight);
calculateHeight();