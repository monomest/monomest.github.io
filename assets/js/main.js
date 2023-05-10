// /*==================== NAME TYPEWRITER EFFECT ====================*/
// Source: https://stackoverflow.com/questions/67070228/how-to-place-blinking-after-typewriter-effect-in-html-css-javascript
var name_len = 0;
var txt = "Hi, I'm Renée";
var speed = 200;

(function typeWriter() {
    if (name_len < txt.length) {
        document.getElementsByClassName("text_out")[0].innerHTML += txt.charAt(name_len);
        name_len++;
        setTimeout(typeWriter, speed);
    }
})();
// /*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle')

/*===== MENU TOGGLE =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.toggle('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelector(".skills__header")

function toggleSkills(){
    let itemClass = this.parentNode.className
    // itemClass is empty upon first click so we set it to the default 'close' setting
    if(itemClass === ''){
        itemClass='skills__content skills__close'
    }
    console.log(itemClass)
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
    else{
        this.parentNode.className = 'skills__content skills__close'
    }
}

for(skills_len = 0; skills_len < skillsContent.length; skills_len++){
    skillsContent[skills_len].addEventListener("click", toggleSkills)
}

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
// const modalViews = document.querySelectorAll('.services__modal'),
//       modalBtns = document.querySelectorAll('.services__button'),
//       modalCloses = document.querySelectorAll('.services__modal-close')

// let modal = function(modalClick){
//     modalViews[modalClick].classList.add('active-modal')
// }

// modalBtns.forEach((modalBtn, i) => {
//     modalBtn.addEventListener('click', () => {
//         modal(i)
//     })
// })

// modalCloses.forEach((modalClose) => {
//     modalClose.addEventListener('click', () => {
//         modalViews.forEach((modalView) => {
//             modalView.classList.remove('active-modal')
//         })
//     })
// })

const modalViews = document.querySelectorAll('.services__modal-body')
const modalBtns = document.querySelectorAll('.services__content')
const modalCloses = document.querySelectorAll('.services__content')

let modal = function(modalClick){
    modalViews[modalClick].classList.toggle('active-modal')
    console.log("Clicked!")
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
// let swiper = new swiper('.portfolio_container', {
//     cssMode: true,
//     loop: true,

//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     }
//   });

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scrollheader'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 80 viewport height, add the show-scroll class to the a tag with the scroll
    if(this.scrollY >= 80) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selection)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    //If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== TOGGLE COLOR STYLE SWITCHER ====================*/ 
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher h4").classList.toggle("open")
    document.querySelector(".style-switcher .colors").classList.toggle("open")
    console.log("Hello")
})

/*==================== COLOR STYLE SWITCHER THEME COLORS ====================*/ 
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color == style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");
        }
    })
}