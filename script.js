window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const scrollPosition = window.scrollY || window.pageYOffset;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / scrollHeight) * 100;
  
    const startColor = [30, 60, 114]; // RGB for #1e3c72 (deep blue)
    const endColor = [243, 156, 18];  // RGB for #f39c12 (vivid orange)
    const currentColor = startColor.map((start, index) => {
      return Math.round(start + (endColor[index] - start) * (scrollPercentage / 100));
    });
  
    navbar.style.backgroundColor = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
  });