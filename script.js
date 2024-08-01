// script.js
// Sample project data
const projects = [
  {
    title: "documentation page",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "assects/documentation1.jpg", 
    technologies: ["html", "css",],
    liveLink: "#",
    sourceLink: "#"
  },
  {
    title: "palindrome checker",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "assects/screen.jpg",
    technologies: ["html", "css", "javaScript"],
    liveLink: "#",
    sourceLink: "#"
  },
  {
    title: "roman numeral converter",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "assects/romann.jpg",
    technologies: ["html", "css", "javaScript"],
    liveLink: "#",
    sourceLink: "#"
  },
  {
    title: "US number validator",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "assects/shot.jpg",
    technologies: ["html", "css", "javaScript"],
    liveLink: "#",
    sourceLink: "#"
  },
  {
    title: "cash register",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "assects/capture_240710_194736.png",
    technologies: ["html", "css", "javaScript"],
    liveLink: "#",
    sourceLink: "#"
  },
  {
    title: "pokman project",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "assects/capture_240710_113937.png",
    technologies: ["html", "css", "javaScript"],
    liveLink: "#",
    sourceLink: "#"
  },
];

// Function to create project cards
function createCards() {
  const container = document.getElementById('slider-container');
  projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="technologies">
        ${project.technologies.map(tech => `<span>${tech}</span>`).join(' ')}
      </div>
      <button onclick="openPopup(${index})">See Project</button>
    `;
    container.appendChild(card);
  });
}

// Function to handle slider navigation
let currentIndex = 0;

function showSlide(index) {
  const container = document.getElementById('slider-container');
  const totalSlides = projects.length;
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const cardWidth = container.querySelector('.card').offsetWidth;
  container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

document.querySelector('.next-btn').addEventListener('click', () => showSlide(currentIndex + 1));
document.querySelector('.prev-btn').addEventListener('click', () => showSlide(currentIndex - 1));

// Function to open popup
function openPopup(index) {
  const popup = document.getElementById('popup');
  const popupContent = document.getElementById('popup-content-inner');
  const project = projects[index];
  popupContent.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <div class="technologies">
      ${project.technologies.map(tech => `<span>${tech}</span>`).join(' ')}
    </div>
    <a href="${project.liveLink}" target="_blank">Live Version</a>
    <a href="${project.sourceLink}" target="_blank">Source Code</a>
  `;
  popup.style.display = 'flex';
}

// Function to close popup
document.getElementById('close-btn').addEventListener('click', () => {
  document.getElementById('popup').style.display = 'none';
});

// Initialize cards
createCards();
showSlide(currentIndex);

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const subjectField = document.getElementById('subject');
  const messageField = document.getElementById('message');
  const errorMessage = document.getElementById('errorMessage');

  // Load data from localStorage
  const formData = JSON.parse(localStorage.getItem('formData')) || {};
  if (formData.name) nameField.value = formData.name;
  if (formData.email) emailField.value = formData.email;
  if (formData.subject) subjectField.value = formData.subject;
  if (formData.message) messageField.value = formData.message;

  // Save data to localStorage on input change
  [nameField, emailField, subjectField, messageField].forEach(field => {
      field.addEventListener('input', () => {
          formData[field.id] = field.value;
          localStorage.setItem('formData', JSON.stringify(formData));
      });
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    errorMessage.style.display = 'none';

    const name = nameField.value.trim();
    const email = emailField.value.trim().toLowerCase();
    const subject = subjectField.value.trim();
    const message = messageField.value.trim();

    if (!name || !email || !subject || !message) {
      errorMessage.textContent = 'All fields are required.';
      errorMessage.style.display = 'block';
      return;
    }

    // Validate email
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        return;
      }
      // If validation is OK, submit the form
    form.submit();
  });
});
