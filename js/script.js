document.querySelector(".dropdown-toggle").addEventListener("click", function(event) {
    if (event.target.classList.contains("dropdown-text")) {
      window.location.href = event.target.parentElement.getAttribute("href");
    }
  });