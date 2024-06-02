document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-container').innerHTML = data;
        updateActiveLink();
      });
  });
  
  function updateActiveLink() {
    const activeLink = document.body.getAttribute('data-active-link');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
  
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === activeLink) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  
    dropdownItems.forEach(item => {
      const href = item.getAttribute('href');
      if (href === activeLink) {
        item.classList.add('active');
        item.closest('.nav-item.dropdown').querySelector('.nav-link').classList.add('active');
      } else {
        item.classList.remove('active');
        item.closest('.nav-item.dropdown').querySelector('.nav-link').classList.remove('active');
      }
    });
  }