var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}
    window.addEventListener('scroll', () => { 
        const scrollable = 300 
        const scrolled = window.scrollY
        if (Math.ceil(scrolled >= scrollable)){
            navLinks.style.right = "-200px";
      }
      
      })
