# CapstoneProject_Personal_Portfolio🚀

## Project Description 📝

Hi guys welcome to my porfolio. i make this project because of implementing HTML CSS and Js by using figma design and it was so interesting this was new thing for me i never do that before, and this portfolio show my activity that how much i work on it and what i achive from this.
this website contains of different things such as: home page, about me page, contact page, works page.

This project consist of 4 sections:

#1) Head section : in this section i added navbar ellipse background and home page.

#2) about section : in this section i added ellipse paragraph button and popup 

#3) Projects section or work section : in this section i added ellipse slider for my projects that shows all my project as a slider.

#4) contact section: in this section we add img some info about myself form footer social and icon.

```html
<!-- Header with Humberger Menu-->
<div class="hide-ellipse-navbar">
  <img src="assecc/Ellipse 20.png" class="ellipse1"/>
  <img src="assecc/Ellipse 330.png" class="ellipse2"/>
</div>
<header>
  <button id="hamburger-menu" type="button"><img src="assecc/hamburger-menu-1836479-1558656.webp" class="size"></button>
  <nav class=" hidden nav1" id="mobile-menu">
    <div class="navbar">
      <button class="x" id="close-button" type="button">x</button><br>
      <a href="#home" class="colorw"><img src="assecc/3b80f4a9-fe73-4bed-ad28-98d50f1e6e26.jfif" class="sizenav" />Home</a><br>
      <a href="#contact"  class="colorw"><img src="assecc/aa29bbd5-5cb5-4629-ab4b-3ee24d744175.jfif" class="sizenav"/>Contact</a><Br>
      <a href="#Projects"  class="colorw"><img src="assecc/154b95c5-71f6-4f08-8aa0-1097e5ddfe34.jfif" class="sizenav"/>Works</a><Br>
      <a href="#about"  class="colorw"><img src="assecc/1727acc2-1ed2-47dd-b1c1-20aefcde6e92.jfif"  class="sizenav" />AboutMe</a>
    </div>
  </nav>
  <div id="hide">
    <img src="assecc/Ellipse 20 (1).png" class="ellipse3"/>
    <img src="assecc/Ellipse 20.png" class="ellipse4"/>
  </div>
</header>
```

```css
/* 1440px screen size */
@media screen and (min-width: 1440px) {
  .home {
    position: relative;
    justify-content: center;
    align-items: center;
    border-radius: 100px 30px 30px 30px;
    margin-right: 1px;
    margin-left: 90px;
    background: rgba(47, 47, 138, 1);
    width: 1300px;
    height: 500px;
    margin-top: 20%;
  }

  .navbar {
    color: white;
    display: flex;
    flex-flow: row;
    height: 50px;
    background: none;
    position: fixed;
    margin-left: 500px;
  }

  .row {
    background: rgba(47, 47, 138, 1);
    border-radius: 100px 30px 30px 30px;
    display: flex;
    flex-direction: row-reverse;
    width: 80%;
    margin-left: 80px;
    margin-top: 50px;
    height: 600px;
  }
}
```

```Java Script
// hambergurMenu
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
// professional skill
const professionaSskill = document.getElementById('professional-skill');
const mobileMenu1 = document.getElementById('mobile-menu1');

professionaSskill.addEventListener('click', () => {
  mobileMenu1.classList.toggle('hidden');
});
```

## Demo 📸
life demo link [ https://sodabarauf.github.io/js-main-portfolio/]

## Technologies Used 🛠️
- HTML
- CSS
- JAVA SCRIPT

## Installation 💻

```clone
  git@github.com:sodabarauf/js-main-portfolio.git
```
## Features ⭐
- This website is a responsive website for mobile and desktop version. 

## Author 👩‍💼
Sodaba✨Rauf✨
- Github: [git@github.com:sodabarauf/js-main-portfolio.git]✔
- LinkedIn: [https://www.linkedin.com/in/sodaba-r-5a0733255/]✔
- Email: [sodabarauf4@gmail.com]✔

## Contributing 🤝
🎇 by using this link you can share your opinion : [git@github.com:sodabarauf/js-main-portfolio.git]


## Design Idea By UX/UI Team:
-Maryam Sherzai👩‍💻

-Fatima Nasiry👩‍💻

-Melika👩‍💻