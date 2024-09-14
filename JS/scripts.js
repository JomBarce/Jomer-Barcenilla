function goToPage(url) {
    window.location = url;
}

function goToSite(url) {
  window.open(url, "_blank");
}

var slideIndex = 1;

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("project");

  // Wrap around if out of bounds
  if (n > x.length) { 
    slideIndex = 1; 
  }

  if (n < 1) { 
    slideIndex = x.length; 
  }

  // Hide all slides
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove('show');
  }

  // Check if slideIndex is within bounds before accessing
  if (slideIndex > 0 && slideIndex <= x.length) {
    x[slideIndex - 1].classList.add('show');  
  }
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

document.addEventListener('DOMContentLoaded', () => {
  const slideContainer = document.getElementById('slideshow');

  // Fetch the JSON data from the correct path
  fetch('JS/works.json')
    .then(response => response.json())
    .then(data => {
      if (!Array.isArray(data) || data.length === 0) {
        console.error('No valid data found.');
        return;
      }

      // Dynamically create slides from JSON data
      data.forEach(project => {
        const div = document.createElement('div');
        div.className = 'project';

        // Create and append elements based on the project data
        div.innerHTML = `
          <a href="${project.url}" target="_blank" class="project-container">
            <img src="${project.path}" alt="${project.name}">
            <div class="project-content">
              <h2>${project.name}</h2>
              <p>${project.description}</p>
              <p>Date: ${project.date}</p>
              <p>Type: ${project.type}</p>
              <p>Technologies: ${project.tech.join(', ')}</p>
            </div>
          </a>
        `;

        slideContainer.appendChild(div);
      });

      // Initialize the slideshow by showing the first slide
      showDivs(slideIndex);

      // Event listeners for the Previous and Next buttons are now redundant
      // because they are handled directly via inline `onclick` attributes
    })
    .catch(error => {
      console.error('Error fetching the JSON data:', error);
    });
});