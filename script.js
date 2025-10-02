// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Smooth Scroll for Nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// GSAP Scroll Animations
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Animate Skills
gsap.from('.skills-list li', {
    opacity: 0,
    x: -50,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: '.skills-list',
        start: 'top 80%'
    }
});

// Particles
tsParticles.load("particles-js", {
    particles: {
        number: { value: 30 },
        color: { value: "#00BFFF" },
        shape: { type: "circle" },
        opacity: { value: 0.3 },
        size: { value: 2 },
        move: { enable: true, speed: 0.5 }
    }
});

// React Timeline with Static Cards (side by side)
const Timeline = () => {
    const experiences = [
        { title: 'Compliance Officer', company: 'Moving Company', dates: '2021 - Present', bullets: ['Ensured regulatory adherence.', 'Optimized workflows for efficiency.', 'Managed compliance data for reliability.'] },
        { title: 'Account Executive', company: 'Handyman Company', dates: 'Previous Role', bullets: ['Secured 250+ referrals.', 'Applied carpentry for problem-solving.', 'Drove growth with data insights.'] },
        { title: 'Creative Director', company: 'Clothing Brand', dates: 'Initial Role', bullets: ['Led media campaigns.', 'Managed brand collaborations.', 'Innovated creative solutions.'] }
    ];

    return (
        <div>
            {experiences.map((exp, index) => (
                <div key={index} className="static-card">
                    <h3>{exp.title} at {exp.company}</h3>
                    <p>{exp.dates}</p>
                    <ul>{exp.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                </div>
            ))}
        </div>
    );
};

ReactDOM.render(<Timeline />, document.getElementById('timeline-root'));
console.log('Timeline rendered');