document.addEventListener('DOMContentLoaded', () => {
    const bootScreen = document.getElementById('boot-screen');
    const clockElement = document.getElementById('clock');
    const panels = document.querySelectorAll('.hud-panel');
    const corePercent = document.querySelector('.core-percent');
    
    // 1. Boot Sequence
    setTimeout(() => {
        bootScreen.classList.add('fade-out');
        initializeHUD();
    }, 3500);

    // 2. Real-time Clock
    function updateClock() {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        clockElement.textContent = `${h}:${m}:${s}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 3. Mouse Parallax Effect
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 30;
        const y = (window.innerHeight / 2 - e.pageY) / 30;

        // Move Panels (HUD)
        panels.forEach((panel, index) => {
            const depth = (index + 1) * 0.5;
            panel.style.transform = `translateX(${x * depth}px) translateY(${y * depth}px) rotateY(${-x * 0.1}deg) rotateX(${y * 0.1}deg)`;
        });

        // Move Cockpit Frame (Structural) - Moves less to simulate being "closer"
        const frames = document.querySelectorAll('.cockpit-frame');
        frames.forEach(frame => {
            frame.style.transform = `translateX(${-x * 0.2}px) translateY(${-y * 0.2}px)`;
        });
    });

    // 4. Simulated Core Charge
    let charge = 100;
    function jitterCore() {
        if (charge >= 100) {
            corePercent.style.color = 'var(--orange)';
            corePercent.textContent = 'READY';
            setTimeout(() => { charge = 99; }, 2000);
        } else {
            charge += Math.random() * 0.5;
            corePercent.style.color = 'var(--cyan)';
            corePercent.textContent = Math.floor(charge) + '%';
        }
    }
    setInterval(jitterCore, 500);

    function initializeHUD() {
        console.log("Titan Neural Link Established.");
    }
});
