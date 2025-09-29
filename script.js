// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Particles
tsParticles.load("particles-js", {
    particles: {
        number: { value: 50 },
        color: { value: "#00BFFF" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: { enable: true, speed: 1 }
    }
});

// React Timeline Component
const Timeline = () => {
    const experiences = [
        { title: '[Job Title 1]', company: '[Company 1]', dates: '[Dates]', bullets: ['[Bullet 1]', '[Bullet 2]'] },
        // Add more placeholders
    ];

    React.useEffect(() => {
        gsap.from('.card', { opacity: 0, y: 50, stagger: 0.2 });
    }, []);

    return (
        <div>
            {experiences.map((exp, index) => (
                <div key={index} className="card" onClick={() => gsap.to(this, { rotation: 360, duration: 1 })}>
                    <h3>{exp.title} at {exp.company}</h3>
                    <p>{exp.dates}</p>
                    <ul>{exp.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                </div>
            ))}
        </div>
    );
};

ReactDOM.render(<Timeline />, document.getElementById('timeline-root'));

// Simple Carousel (manual scroll, or add arrows if needed)