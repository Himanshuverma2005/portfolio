// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(15px)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#' + current) {
            item.classList.add('active');
        }
    });
});

// Intersection Observer for animations - Enhanced for production
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Fallback for browsers that don't support IntersectionObserver
let observer;
if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
} else {
    // Fallback: immediately show all animations
    observer = {
        observe: (element) => {
            element.classList.add('visible');
        },
        unobserve: () => { }
    };
}

// Add animation classes to elements - Enhanced for production
function initializeAnimations() {
    // Wait for all content to be ready
    setTimeout(() => {
        // Fade in animations
        const fadeElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .about-card');
        fadeElements.forEach((el, index) => {
            if (el) {
                el.classList.add('fade-in');
                el.style.transitionDelay = `${index * 0.1}s`;
                observer.observe(el);
            }
        });

        // Slide in animations
        const slideLeftElements = document.querySelectorAll('.about-text, .contact-info');
        slideLeftElements.forEach(el => {
            if (el) {
                el.classList.add('slide-in-left');
                observer.observe(el);
            }
        });

        const slideRightElements = document.querySelectorAll('.about-image, .contact-form');
        slideRightElements.forEach(el => {
            if (el) {
                el.classList.add('slide-in-right');
                observer.observe(el);
            }
        });
    }, 100);
}

// Initialize animations when DOM is ready and when page is fully loaded
document.addEventListener('DOMContentLoaded', initializeAnimations);
window.addEventListener('load', initializeAnimations);

// Skill bar animation - Enhanced for production
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    if ('IntersectionObserver' in window) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target;
                    const width = progress.getAttribute('data-width');
                    setTimeout(() => {
                        progress.style.width = width + '%';
                    }, 500);
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        skillBars.forEach(bar => {
            if (bar) {
                skillObserver.observe(bar);
            }
        });
    } else {
        // Fallback: animate all skill bars immediately
        skillBars.forEach(bar => {
            if (bar) {
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 500);
            }
        });
    }
}

// Initialize skill bars
document.addEventListener('DOMContentLoaded', initializeSkillBars);
window.addEventListener('load', initializeSkillBars);

// Initialize EmailJS
(function () {
    emailjs.init("WwQMUQi92wqG-nrte"); // You'll need to replace this with your actual EmailJS public key
})();

// Contact form handling with EmailJS
const contactForm = document.querySelector('#contactForm');
const submitBtn = document.querySelector('#submitBtn');
const btnText = document.querySelector('.btn-text');
const btnLoading = document.querySelector('.btn-loading');
const formMessage = document.querySelector('#formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-block';
        formMessage.style.display = 'none';

        // Get form data
        const formData = new FormData(this);
        const templateParams = {
            name: formData.get('name'),
            email: formData.get('email'),
            title: formData.get('subject'),
            message: formData.get('message')
        };

        // Log the data being sent (for debugging)
        console.log('Sending email with data:', templateParams);

        // Send email using EmailJS
        emailjs.send('service_e70gwuu', 'template_cia8kbu', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                console.log('Email sent successfully to: him39vema@gmail.com');
                console.log('Response details:', response);

                // Show success message
                formMessage.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i> Message sent successfully! I\'ll get back to you soon.</div>';
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';

                // Reset form
                contactForm.reset();

                // Hide success message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }, function (error) {
                console.log('FAILED...', error);
                console.log('Error details:', error);
                console.log('Error text:', error.text);

                // Show error message
                formMessage.innerHTML = '<div class="error-message"><i class="fas fa-exclamation-circle"></i> Failed to send message. Error: ' + error.text + '. Please try again or contact me directly at himanshuve.0309@gmail.com</div>';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
            })
            .finally(function () {
                // Reset button state
                submitBtn.disabled = false;
                btnText.style.display = 'inline-block';
                btnLoading.style.display = 'none';
            });
    });
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation on load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Smooth reveal animation for stats
const stats = document.querySelectorAll('.stat h3');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stat = entry.target;
            const finalValue = parseInt(stat.textContent);
            let currentValue = 0;
            const increment = finalValue / 50;

            const updateStat = () => {
                if (currentValue < finalValue) {
                    currentValue += increment;
                    stat.textContent = Math.ceil(currentValue) + '+';
                    requestAnimationFrame(updateStat);
                } else {
                    stat.textContent = finalValue + '+';
                }
            };

            updateStat();
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => {
    statsObserver.observe(stat);
});

// Add floating animation to hero image
const heroImage = document.querySelector('.image-placeholder');
if (heroImage) {
    setInterval(() => {
        heroImage.style.animation = 'none';
        setTimeout(() => {
            heroImage.style.animation = 'float 6s ease-in-out infinite';
        }, 10);
    }, 6000);
}

// Add CSS animation for floating effect
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }
    
    .image-placeholder {
        animation: float 6s ease-in-out infinite;
    }
    
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Preloader (optional)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add cursor follower effect (optional enhancement)
const cursor = document.createElement('div');
cursor.className = 'cursor-follower';
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    transform: translate(-50%, -50%);
    opacity: 0;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.opacity = '0.7';
});

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
});

// Add click ripple effect to buttons
document.querySelectorAll('.btn, .social-link, .project-link').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);