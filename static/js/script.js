document.addEventListener("DOMContentLoaded", function() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,  // Aktiviert sanftes Scrollen
    })
  
});

function Schneesturm() {
    let schneeflocke_anzahl = 500; // Anzahl der Schneeflocken
    let max_delay = 4000; // Maximale Verzögerung von 2 Sekunden

    for (let i = 0; i < schneeflocke_anzahl; i++) {
        setTimeout(Schneesturm_start, Math.random() * max_delay);
    }
}

function Schneesturm_start() {
    const schneeflocke = document.createElement("div");
    
    const icons = ['fa-snowflake-o', 'fa-snowflake'];
    const zufalls_icon = icons[Math.floor(Math.random() * icons.length)];
    
    const farben = ['#ffffff', '#cceeff', '#99ccff', '#e6f7ff'];
    const zufalls_farbe = farben[Math.floor(Math.random() * farben.length)];
    
    schneeflocke.classList.add('fa', zufalls_icon, 'snowflake_selfcreated');
    schneeflocke.style.color = zufalls_farbe;
    schneeflocke.style.left = Math.random() * 100 + 'vw';
    schneeflocke.style.animationDuration = Math.random() * 5 + 5 + 's';

    document.body.appendChild(schneeflocke);

    // Entfernen der Schneeflocke nach Ablauf ihrer Animation
    setTimeout(() => {
        schneeflocke.remove();
    }, (parseFloat(schneeflocke.style.animationDuration) * 1000));
}
