// assets/js/home.js
document.addEventListener('DOMContentLoaded', function() {
  const animateInElements = document.querySelectorAll('.animate-in');
  const animateOutElements = document.querySelectorAll('.animate-out');

  // Initial state: Add pre-animation classes
  animateInElements.forEach(el => el.classList.add('pre-animate'));
  animateOutElements.forEach(el => el.classList.add('pre-animate-out'));

  // Create observer callback
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Element enters viewport, remove pre-animation class (triggers CSS animation)
        if (entry.target.classList.contains('pre-animate')) {
          entry.target.classList.remove('pre-animate');
        }
        if (entry.target.classList.contains('pre-animate-out')) {
          entry.target.classList.remove('pre-animate-out');
        }
        // Stop observing once animation is triggered
        observer.unobserve(entry.target);
      }
    });
  };

  // Create observer instance
  // threshold: 0.1 means trigger when 10% of element is visible
  // rootMargin: '0px 0px -100px 0px' acts like an offset, triggering slightly before/after
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px' 
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Start observing all elements
  animateInElements.forEach(el => observer.observe(el));
  animateOutElements.forEach(el => observer.observe(el));
});
