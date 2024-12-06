function updateBackgroundGradient(event) {
    const container = event.target;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    const scrollFraction = scrollTop / scrollHeight;

    const vague = document.getElementById("vague");
    let check = false;

    // Définir les couleurs de départ et d'arrivée
    const colors = [
        [108, 207, 249],  // #6ccff9
        [1, 159, 230],    // #019fe6
        [2, 86, 159],     // #02569f
        [1, 38, 71]       // #012647
    ];

    // Calculer les indices des couleurs intermédiaires selon la fraction du défilement
    const colorIndex = Math.min(Math.floor(scrollFraction * (colors.length - 1)), colors.length - 2);
    const nextColor = colors[colorIndex + 1];
    const prevColor = colors[colorIndex];

    const interpolatedColor = prevColor.map((start, index) => {
        const diff = nextColor[index] - start;
        return Math.round(start + diff * (scrollFraction * (colors.length - 1) - colorIndex));
    });

    // Appliquer la couleur interpolée en arrière-plan
    document.body.style.background = `rgb(${interpolatedColor.join(",")})`;
}


window.onload = () => {
    const container = document.querySelector('.slides-container');
    updateBackgroundGradient({ target: container });
};