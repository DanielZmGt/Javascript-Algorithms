setTimeout(() => document.getElementById('boot-screen').classList.add('fade-out'), 3000);

setInterval(() => {
    const now = new Date();
    document.getElementById('clock').textContent = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0') + ":" + now.getSeconds().toString().padStart(2, '0');
}, 1000);

document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;
    document.getElementById('cockpit-container').style.transform = `translateX(${x}px) translateY(${y}px)`;
});
