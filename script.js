// =====================================================
// PORTFOLIO JAVASCRIPT
// =====================================================


// =====================================================
// 1. SMOOTH NAVIGATION
// =====================================================

const navLinks = document.querySelectorAll('.navlist a[href^="#"]');

navLinks.forEach(link => {

    link.addEventListener('click', function (event) {

        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (!targetSection) return;

        const navbar = document.querySelector('.navlist');

        const navbarHeight = navbar
            ? navbar.offsetHeight
            : 0;

        const sectionPosition =
            targetSection.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });

    });

});


// =====================================================
// 2. ACTIVE NAVBAR LINK
// =====================================================

const sections = document.querySelectorAll(
    '#home, #about, #skills, #work, #projects, #contact'
);

const navigationLinks = document.querySelectorAll(
    '.navlist a[href^="#"]'
);


function updateActiveLink() {

    const scrollPosition = window.scrollY + 150;

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute('id');
        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove('active');

        if (
            link.getAttribute('href') ===
            `#${currentSection}`
        ) {
            link.classList.add('active');
        }

    });

}


window.addEventListener('scroll', updateActiveLink);

updateActiveLink();


// =====================================================
// 3. SCROLL REVEAL ANIMATION
// =====================================================

const animatedElements = document.querySelectorAll(
    '.section-title, .about-text, .about-box, .skill-card, .work-card, .project-card, .contact-text, .contact-form'
);


const animationObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('show');

                animationObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(element => {

    element.classList.add('hidden');

    animationObserver.observe(element);

});


// =====================================================
// 4. BACK TO TOP BUTTON
// =====================================================

const backToTop = document.createElement('button');

backToTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

backToTop.classList.add('back-to-top');

document.body.appendChild(backToTop);


backToTop.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});


window.addEventListener('scroll', () => {

    if (window.scrollY > 500) {

        backToTop.classList.add('visible');

    } else {

        backToTop.classList.remove('visible');

    }

});


// =====================================================
// 5. CONTACT FORM
// =====================================================

const contactForm = document.querySelector('.contact-form');


if (contactForm) {

    contactForm.addEventListener('submit', function (event) {

        event.preventDefault();


        const name =
            contactForm.querySelector(
                'input[type="text"]'
            );

        const email =
            contactForm.querySelector(
                'input[type="email"]'
            );

        const textarea =
            contactForm.querySelector(
                'textarea'
            );


        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const messageValue = textarea.value.trim();


        // Check name

        if (nameValue === '') {

            alert('Please enter your name.');

            name.focus();

            return;

        }


        // Check email

        if (emailValue === '') {

            alert('Please enter your email.');

            email.focus();

            return;

        }


        // Check email format

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(emailValue)) {

            alert('Please enter a valid email address.');

            email.focus();

            return;

        }


        // Check message

        if (messageValue === '') {

            alert('Please enter your message.');

            textarea.focus();

            return;

        }


        // Success

        alert(
            `Thank you ${nameValue}! Your message has been received.`
        );


        contactForm.reset();

    });

}


// =====================================================
// 6. TYPING EFFECT
// =====================================================

const heading = document.querySelector('.content h1');


if (heading) {

    const text = 'Web Developer';

    let characterIndex = 0;

    heading.textContent = '';


    function typeText() {

        if (characterIndex < text.length) {

            heading.textContent +=
                text.charAt(characterIndex);

            characterIndex++;

            setTimeout(typeText, 100);

        }

    }


    typeText();

}


// =====================================================
// 7. PROJECT CARD HOVER EFFECT
// =====================================================

const projectCards =
    document.querySelectorAll('.project-card');


projectCards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform =
            'translateY(-10px)';

    });


    card.addEventListener('mouseleave', () => {

        card.style.transform =
            'translateY(0)';

    });

});


// =====================================================
// 8. CURRENT YEAR IN FOOTER
// =====================================================

const footerText =
    document.querySelector('.footer p');


if (footerText) {

    const currentYear =
        new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Arti Totawar. All Rights Reserved.`;

}


// =====================================================
// 9. PAGE LOADED MESSAGE
// =====================================================

document.addEventListener('DOMContentLoaded', () => {

    console.log(
        'Portfolio website loaded successfully!'
    );

});