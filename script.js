document.addEventListener('DOMContentLoaded', function() {

    // --- Register GSAP Plugins ---
    gsap.registerPlugin(ScrollTrigger);

    // --- Hero Section Animation ---
    const heroTimeline = gsap.timeline();
    heroTimeline.from('.line1', { duration: 0.8, y: 100, opacity: 0, ease: 'power3.out' })
                .from('.line2', { duration: 0.8, y: 100, opacity: 0, ease: 'power3.out' }, '-=0.6')
                .from('.line3', { duration: 0.8, y: 50, opacity: 0, ease: 'power3.out' }, '-=0.6')
                .from('.line4', { duration: 0.8, y: 50, opacity: 0, ease: 'power3.out' }, '-=0.6') // .social-links
                .from('.line5', { duration: 0.8, y: 50, opacity: 0, ease: 'power3.out' }, '-=0.6'); // .cta-button


    // --- Timeline Scroll Animation ---
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                end: 'bottom 60%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            x: item.offsetLeft > 0 ? 100 : -100,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // --- Certification Gallery Filter ---
    const certFilterButtons = document.querySelectorAll('.cert-filter-btn');
    const certCards = document.querySelectorAll('.cert-card');

    certFilterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Check if the button is already active, if so, do nothing
            // This allows the link to be clicked if the filter is already active
            if (button.classList.contains('active')) {
                // Let the link click go through
                return;
            }
            
            e.preventDefault(); // Prevent link click ONLY if changing filter
            e.stopPropagation(); // Stop event from bubbling
            
            certFilterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter;

            certCards.forEach(card => {
                const category = card.dataset.category;
                const shouldShow = filter === 'all' || filter === category;

                gsap.to(card, {
                    duration: 0.5,
                    opacity: shouldShow ? 1 : 0,
                    scale: shouldShow ? 1 : 0.8,
                    display: shouldShow ? 'block' : 'none',
                    ease: 'power3.out'
                });
            });
        });
    });
    
    // Initial load animation for cert cards
    gsap.from(".cert-card", {
        scrollTrigger: {
            trigger: "#certifications",
            start: "top 75%",
            toggleActions: "play none none none"
        },
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.05,
        ease: 'power3.out'
    });


    // --- Skills Galaxy ---
    const skills = [
        { name: 'Python', size: 120 }, { name: 'Java', size: 90 }, { name: 'C', size: 80 },
        { name: 'Machine Learning', size: 140 }, { name: 'Deep Learning', size: 110 },
        { name: 'Data Science', size: 110 }, { name: 'NLP', size: 90 },
        { name: 'Computer Vision', size: 100 }, { name: 'OpenCV', size: 90 },
        { name: 'Scikit-learn', size: 100 }, { name: 'TensorFlow', size: 110 },
        { name: 'HTML/CSS', size: 90 }, { name: 'JavaScript', size: 90 },
        { name: 'MySQL', size: 80 }, { name: 'MongoDB', size: 80 },
        { name: 'Git & GitHub', size: 100 }, { name: 'DSA', size: 90 }
    ];

    const galaxy = document.querySelector('.skills-galaxy');
    if (galaxy) {
        skills.forEach(skill => {
            const orb = document.createElement('div');
            orb.className = 'skill-orb';
            orb.textContent = skill.name;
            orb.style.width = `${skill.size}px`;
            orb.style.height = `${skill.size}px`;
            
            orb.style.left = `${Math.random() * (galaxy.offsetWidth - skill.size)}px`;
            orb.style.top = `${Math.random() * (galaxy.offsetHeight - skill.size)}px`;
            
            galaxy.appendChild(orb);

            gsap.to(orb, {
                duration: Math.random() * 10 + 15,
                x: (Math.random() - 0.5) * 100,
                y: (Math.random() - 0.5) * 100,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        });
    }
    
    gsap.from(".skill-orb", {
        scrollTrigger: {
            trigger: "#skills",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        duration: 1,
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    });


    // --- Project Gallery Filter ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter;

            projectCards.forEach(card => {
                const category = card.dataset.category;
                const shouldShow = filter === 'all' || filter === category;

                gsap.to(card, {
                    duration: 0.5,
                    opacity: shouldShow ? 1 : 0,
                    scale: shouldShow ? 1 : 0.8,
                    display: shouldShow ? 'block' : 'none',
                    ease: 'power3.out'
                });
            });
        });
    });

    // --- Achievements Animation ---
    gsap.from(".achievement-card", {
        scrollTrigger: {
            trigger: "#achievements",
            start: "top 75%",
            toggleActions: "play none none none"
        },
        duration: 0.8,
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)'
    });

    // --- Medium Cards Animation ---
    gsap.from(".medium-card", {
        scrollTrigger: {
            trigger: "#medium",
            start: "top 75%",
            toggleActions: "play none none none"
        },
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power3.out'
    });

});