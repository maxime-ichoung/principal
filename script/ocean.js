

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

    // Extraire les valeurs RGB de la couleur interpolée
    const [r1, g1, b1] = interpolatedColor;
    console.log(r1, g1, b1);
    const m = window.getComputedStyle(vague).fill;
    let r2 = m[4].concat(m[5]);
    let g2 = m[6].concat(m[7].concat(m[8]));
    // console.log(r2);
    // Vérification de la couleur spécifique (rgb(94, 200, 246))
    if (r1 <= 92) {
        // console.log("ok");
        vague.style.fill = `rgb(${interpolatedColor.join(",")})`;
        // console.log(`rgb(${interpolatedColor.join(",")})`);
    }

    if (check && r2 >= 92) {
        // console.log("nok");
        // console.log(r2);
        check = false;
        vague.style.fill = `rgb(93, 200, 246)`;
    }

    if (check === true) {
        vague.style.fill = `rgb(${interpolatedColor.join(",")})`;
    }
}


window.onload = () => {
    const container = document.querySelector('.slides-container');
    updateBackgroundGradient({ target: container });
};