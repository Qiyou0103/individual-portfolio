    // Sticky Navigation Bar
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', fixNav);

    function fixNav() {
        if(window.scrollY > nav.offsetHeight + 150) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    }

    // Change Navigation Bar Background on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navlinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
                
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
                
        window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
            });
        });
    });
        
    // Back to Top Button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
             backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Skills Section - Random Color Animation
    document.addEventListener('DOMContentLoaded', function() {
        const skills = document.querySelectorAll('.skill');
       
    // Generate random hex color
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
            
    // Apply hover effect to each skill
    skills.forEach(skill => {
                
    // Only add hover effects if not on mobile
    if (window.innerWidth > 768) {
        skill.addEventListener('mouseenter', function() {
            const color = getRandomColor();
            this.style.setProperty('--glow-color', color);
            });
        }
    });

    // Generate vibrant random colors
    function getRandomColor() {
        const hue = Math.floor(Math.random() * 360);
        const saturation = 35 + Math.floor(Math.random() * 30);
        const lightness = 35 + Math.floor(Math.random() * 20);
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    // Hover effect for desktop
    if (window.innerWidth > 768) {
        skills.forEach(skill => {
            skill.addEventListener('mouseenter', function() {
                this.style.animation = 'glowPulse 2s infinite';
    });
                    
    skill.addEventListener('mouseleave', function() {
        this.style.animation = 'float 8s infinite alternate';
                });
            });
        }
    });