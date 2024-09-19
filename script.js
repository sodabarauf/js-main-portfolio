document.addEventListener('DOMContentLoaded', () => {
  // Navbar Scroll Spy
  const navLinks = document.querySelectorAll('.navbar a');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

  // Hamburger Menu
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  document.getElementById('close-button').addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Dropdown Menus
  document.getElementById('professional-skill').addEventListener('click', () => {
    document.getElementById('mobile-menu1').classList.toggle('hidden');
  });
  document.getElementById('languages').addEventListener('click', () => {
    document.getElementById('mobile-menu2').classList.toggle('hidden');
  });
  document.getElementById('soft-skill').addEventListener('click', () => {
    document.getElementById('mobile-menu3').classList.toggle('hidden');
  });
  document.getElementById('close-button1').addEventListener('click', () => {
    document.getElementById('mobile-menu1').classList.toggle('hidden');
  });
  document.getElementById('close-button2').addEventListener('click', () => {
    document.getElementById('mobile-menu2').classList.toggle('hidden');
  });
  document.getElementById('close-button3').addEventListener('click', () => {
    document.getElementById('mobile-menu3').classList.toggle('hidden');
  });

  // Content Population
  document.getElementById('home-content').innerHTML = `
    <p class="colorw1 txt1 txt">Salaam Alikum!</p>
    <p class="colorw1 txt1">I'm Sodaba Rauf <span>Glad To See You :)</span></p>
  `;
  document.getElementById('about-content').innerHTML = `
    <p class="colorw"> My name is Sodaba Rauf.I'm a WEB Developer, currently working with VSCode, Git and GitHub My goal is to make a professional web page that will interest people.
    </p>
  `;

  // Sample project data
  const projects = [
    {
      title: 'Documentation Page',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. This project demonstrates the creation of a documentation page using HTML and CSS.',
      image: 'assests/documentation1.jpg',
      technologies: ['HTML', 'CSS'],
      liveLink: 'https://sodabarauf.github.io/technical-documentation-page/',
      sourceLink: 'https://github.com/sodabarauf/technical-documentation-page',
    },
    {
      title: 'Palindrome Checker',
      description: 'A tool to check if a given string is a palindrome using HTML, CSS, and JavaScript. The project showcases basic DOM manipulation and string handling in JavaScript.when user click it display true or false',
      image: 'assests/palindrome1.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://sodabarauf.github.io/palindrome-project/',
      sourceLink: 'https://github.com/sodabarauf/palindrome-project',
    },
    {
      title: 'Roman Converter',
      description: 'A converter that translates between Roman numerals and regular numbers. This project highlights JavaScript algorithms and user input handling.it changes values to romai number',
      image: 'assests/roman.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://sodabarauf.github.io/numerial-roman/',
      sourceLink: 'https://github.com/sodabarauf/numerial-roman',
    },
    {
      title: 'US Number Validator',
      description: 'A validation tool for US phone numbers using JavaScript. This project includes regular expressions and input validation techniques.when user click it display',
      image: 'assests/us validator.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://sodabarauf.github.io/telephone-number-validator/',
      sourceLink: 'https://github.com/sodabarauf/telephone-number-validator',
    },
    {
      title: 'Cash Register',
      description: 'A cash register application that calculates change using HTML, CSS, and JavaScript. It demonstrates arithmetic operations and conditional logic in JavaScript.',
      image: 'assests/cash.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://sodabarauf.github.io/cash-register/',
      sourceLink: 'https://github.com/sodabarauf/cash-register',
    },
    {
      title: 'Pokemon Project',
      description: 'A project displaying information about various Pokémon. It uses HTML, CSS, and JavaScript to fetch data from an API and display it dynamically. this is a dynamic app',
      image: 'assests/pokman.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://sodabarauf.github.io/pokman-project/',
      sourceLink: 'https://github.com/sodabarauf/pokman-project',
    },
  ];

  // Function to create project cards
  const createCards = () => {
    const container = document.getElementById('slider-container');
    projects.forEach((project, index) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="technologies">
          ${project.technologies.map((tech) => `<span>${tech}</span>`).join(' ')}
        </div>
        <button onclick="openProjectPopup(${index})">See Project</button>
      `;
      container.appendChild(card);
    });
  };

  // Slider Navigation
  let currentIndex = 0;
  const showSlide = (index) => {
    const container = document.getElementById('slider-container');
    const totalSlides = projects.length;
    const cardWidth = container.querySelector('.card').offsetWidth + 20;

    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }
    container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  };

  document.querySelector('.next-btn').addEventListener('click', () => showSlide(currentIndex + 1));
  document.querySelector('.next-btn').addEventListener('touchstart', () => showSlide(currentIndex + 1));
  document.querySelector('.prev-btn').addEventListener('click', () => showSlide(currentIndex - 1));
  document.querySelector('.prev-btn').addEventListener('touchstart', () => showSlide(currentIndex - 1));

  // Project Popup Modal
  window.openProjectPopup = (index) => {
    const popup = document.getElementById('popup1');
    const popupContent = document.getElementById('popup-content-inner');
    const project = projects[index];
    popupContent.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <div class="technologies">
        ${project.technologies.map((tech) => `<span>${tech}</span>`).join(' ')}
      </div>
      <a href="${project.liveLink}" target="_blank" class="btn"><button>Live Version</button></a>
      <a href="${project.sourceLink}" target="_blank" class="btn"><button>Source Code</button></a>
    `;
    popup.style.display = 'flex';
    console.log('buttonClick');
  };

  document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('popup1').style.display = 'none';
  });

  // Initialize cards and slider
  createCards();
  showSlide(currentIndex);

  // Certificate Popup functionality
  const toggleCertificatePopup = () => {
    const popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
  };

  const certificateButton = document.getElementById('open-certificate-popup');
  const closeCertificateButton = document.getElementById('close-certificate-popup');

  certificateButton.addEventListener('click', toggleCertificatePopup);
  certificateButton.addEventListener('touchstart', toggleCertificatePopup);
  closeCertificateButton.addEventListener('click', toggleCertificatePopup);
  closeCertificateButton.addEventListener('touchstart', toggleCertificatePopup);

// Form handling
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
[nameField, emailField, subjectField, messageField].forEach((field) => {
  field.addEventListener('input', () => {
    formData[field.id] = field.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from redirecting or refreshing the page
  errorMessage.style.display = 'none'; // Hide any previous error messages

  const name = nameField.value.trim();
  const email = emailField.value.trim().toLowerCase(); // Ensure email is lowercase for validation
  const subject = subjectField.value.trim();
  const message = messageField.value.trim();

  // Validate that no fields are empty
  if (!name || !email || !subject || !message) {
    errorMessage.textContent = 'All fields are required.';
    errorMessage.style.display = 'block';
    return;
  }

  // Validate email format
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (!emailPattern.test(email)) {
    errorMessage.textContent = 'Please enter a valid email address.';
    errorMessage.style.display = 'block';
    return;
  }

  // If all validation passes, submit the form
  form.submit();
});
});
