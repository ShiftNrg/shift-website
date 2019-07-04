import '../sass/styles.scss';

// Remove "no-js" class since we do have javascript enabled
document.body.className = document.body.className.replace("no-js","");


// Set the --vh without the navbar for mobile
function calculateHeight()
{
    var vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', vh + "px");
}
window.addEventListener('resize', calculateHeight);
calculateHeight();