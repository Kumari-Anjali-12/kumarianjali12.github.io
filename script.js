document.addEventListener('DOMContentLoaded', function() {

    // --- Register GSAP Plugins ---
    gsap.registerPlugin(ScrollTrigger);

    // --- Hero Section Animation ---
    const heroTimeline = gsap.timeline();
    heroTimeline.from('.line1', { duration: 0.8, y: 100, opacity: 0, ease: 'power3.out' })
                .from('.line2', { duration: 0.8, y: 100, opacity: 0, ease: 'power3.out' }, '-=0.6')
                .from('.line3', { duration: 0.8, y: 50, opacity: 0, ease: 'power3.out' }, '-=0.6')
                .from('.line4', { duration: 0.8, y: 50, opacity: 0, ease: 'power3.out' }, '-=0.6');


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
            x: item.offsetLeft > 0 ? 100 : -100, // Check if it's a right or left item
            duration: 1,
            ease: 'power3.out'
        });
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
    skills.forEach(skill => {
        const orb = document.createElement('div');
        orb.className = 'skill-orb';
        orb.textContent = skill.name;
        orb.style.width = `${skill.size}px`;
        orb.style.height = `${skill.size}px`;
        
        // Position orbs randomly
        orb.style.left = `${Math.random() * (galaxy.offsetWidth - skill.size)}px`;
        orb.style.top = `${Math.random() * (galaxy.offsetHeight - skill.size)}px`;
        
        galaxy.appendChild(orb);

        // Animate orbs
        gsap.to(orb, {
            duration: Math.random() * 10 + 15,
            x: (Math.random() - 0.5) * 100,
            y: (Math.random() - 0.5) * 100,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    });
    
    // Animate the whole section on scroll
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
            // Update active button
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

});