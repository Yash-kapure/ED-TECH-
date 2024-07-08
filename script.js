const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});



// Theme


const checkbox = document.getElementById("checkbox");
const body = document.body;

// Check the stored theme preference in localStorage
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  body.classList.add(currentTheme);
  // Update the checkbox state based on the stored theme
  checkbox.checked = currentTheme === "dark";
}

// Toggle theme on checkbox change
checkbox.addEventListener("change", () => {
  body.classList.toggle("dark");
  // Update localStorage with the current theme preference
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});


// loading

// Function to check network speed and show website content
function checkNetworkSpeedAndShowContent() {
  // Record the start time
  var startTime = performance.now();

  // Simulate network speed check with a setTimeout
  setTimeout(function() {
    // Calculate the time taken for the network speed check
    var endTime = performance.now();
    var loadingTime = endTime - startTime;

    // Simulate network speed (you can replace this with actual network speed measurement)
    var networkSpeed = loadingTime < 1000 ? 'fast' : 'slow'; // Adjust the threshold as needed

    // Hide the loader and show the website content based on network speed
    var loaderContainer = document.querySelector('.loader-container');
    var websiteContent = document.getElementById('website-content');

    if (networkSpeed === 'fast') {
      // Simulate fast loading by hiding the loader immediately and showing the website content
      loaderContainer.style.display = 'none';
      websiteContent.style.display = 'block';
    } else {
      // Simulate slow loading by delaying the display of website content
      setTimeout(function() {
        loaderContainer.style.display = 'none';
        websiteContent.style.display = 'block';
      }, 3000); // Adjust the delay as needed
    }
  }, 3000); // Simulate network speed check taking 3 seconds
}

// Call the function to check network speed and show content when the page loads
checkNetworkSpeedAndShowContent();

