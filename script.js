// Smooth scroll animation for navigation links
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
  
      var target = $(this.getAttribute('href'));
  
      if (target.length) {
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  });
  
  // Function to check if an element is in the viewport
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle the animation trigger
  function handleAnimation() {
    var homeSection = document.getElementById('home');
    var animatedElement = document.querySelector('.parallax-content h1');
  
    function animate() {
      animatedElement.classList.add('animate-fade-in-down');
      window.removeEventListener('scroll', handleAnimation);
    }
  
    if (isInViewport(homeSection) || document.readyState === 'complete') {
      animate();
    }
  }
  
  // Event listener for scroll event
  window.addEventListener('scroll', handleAnimation);
  
  // Event listener for load event
  window.addEventListener('load', function() {
    handleAnimation();
  
    // Additional JavaScript functionalities or event listeners can be added here
  });
  
  // Handle form submission
  $('form').submit(function(event) {
    event.preventDefault();
  
    var name = $('#name').val();
    var address = $('#address').val();
    var coffee = $('#coffee').val();
    var quantity = $('#quantity').val();
  
    // Validate form inputs
    if (!name || !address || !coffee || !quantity) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Process order
    // TODO: Implement order processing logic here
  
    alert('Your order has been placed successfully!');
    $('form')[0].reset();
  });
  