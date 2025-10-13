function login() {
    const password = document.getElementById('password').value;
    
    if (password === "Nad2014P") { // You can change this password
      localStorage.setItem("loggedIn", "true");
      window.location.href = "dashboard.html";
    } else {
      alert("Incorrect password!");
    }
  }
  
  // Prevent unauthorized access to dashboard
  if (window.location.pathname.includes("dashboard.html") && localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
  
  // Logout function
  function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
  }

  // Language switching functionality
  function switchLanguage(lang) {
    // Store the selected language
    localStorage.setItem('selectedLanguage', lang);
    
    // Update active language link
    document.getElementById('polish-lang').classList.toggle('active', lang === 'pl');
    document.getElementById('english-lang').classList.toggle('active', lang === 'en');
    
    // Get all elements with data attributes for translation
    const elements = document.querySelectorAll('[data-en][data-pl]');
    
    elements.forEach(element => {
      if (lang === 'pl') {
        element.textContent = element.getAttribute('data-pl');
      } else {
        element.textContent = element.getAttribute('data-en');
      }
    });
  }

  // Initialize language on page load
  document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    switchLanguage(savedLanguage);
  });

  // Toggle password visibility on login page
  function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.getElementById('togglePassword');
    const isHidden = passwordInput.type === 'password';
    passwordInput.type = isHidden ? 'text' : 'password';
    // Update button icon and aria-label
    toggleButton.textContent = isHidden ? '🙈' : '👁️';
    toggleButton.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
  }

  // Download function for app files
  function downloadApp(url) {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'PlayRob_1.0.apk';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Download via Downloader App function
  function downloadViaApp(url) {
    // Open the downloader app link in a new tab
    window.open(url, '_blank');
  }
  