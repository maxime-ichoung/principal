    let whale_left = -900;
    let logo_top = 355;
    let logo_left = 800;

    let im1 = document.getElementById("logo");
    let im2 = document.getElementById("whale");
    let img3 = document.getElementById("shark");

    im1.addEventListener("click", emptyFunction);
    let shark_left = document.documentElement.scrollWidth;
    img3.style.left = shark_left + "px";
    img3.style.top = logo_top + "px";

    function emptyFunction() {
        im1.removeEventListener("click", emptyFunction);
        im2.style.left = whale_left + "px";
        im2.style.display = "block";
        moveImage();
    }

    let rot = 0.3;

    async function moveImage() {
        for (let i = 0; i < 110; i++) {
            await delay(1);
            whale_left += 10;
            im2.style.left = whale_left + "px";
        }
        createRotationAnimation(rot, 'linear', 360);
        im1.classList.add("rotate");

        for (let i = 0; i < 110; i++) {
            await delay(10);
            logo_top -= 10;
            logo_left += 10;
            im1.style.top = logo_top + "px";
            im1.style.left = logo_left + "px";
            if (logo_top < 10) break;
        }
        for (let i = 0; i < 110; i++) {
            await delay(10);
            logo_top += 10;
            logo_left += 10;
            im1.style.top = logo_top + "px";
            im1.style.left = logo_left + "px";
            if (logo_top >= 400) break;
        }
        img3.style.display = "block";
        for (let i = 0; i < 110; i++) {
            await delay(10);
            logo_left -= 11;
            whale_left -= 11;
            shark_left -= 15;
            im1.style.left = logo_left + "px";
            im2.style.left = whale_left + "px";
            img3.style.left = shark_left + "px";
            if (logo_top < 10) break;
            rot += 0.01;
            createRotationAnimation(rot, 'linear', 360);
            im1.classList.add("rotate");
        }
        createRotationAnimation(0, 'linear', 0);
        explosion("shark_e.png");
        await delay(1);
        let diag = document.getElementById("dialog");
        diag.style.left = parseInt(im1.style.left, 10)+30+"px";
        diag.style.top = parseInt(im1.style.top, 10)-120+"px";
        diag.style.display = "block";
    }

    function explosion(s) {
        let tmp = document.getElementById("shark");
        tmp.style.display = "none";  // Masquer le requin central
    
        let posl = parseInt(tmp.style.left, 10);  // Récupère la position actuelle de gauche
        let post = parseInt(tmp.style.top, 10);   // Récupère la position actuelle de haut
    
        // Les éléments de requin
        let s1 = document.getElementById("shark1");
        let s2 = document.getElementById("shark2");
        let s3 = document.getElementById("shark3");
        let s4 = document.getElementById("shark4");
        let s5 = document.getElementById("shark5");
        let s6 = document.getElementById("shark6");
    
        // Distance entre chaque requin
        const distance = 100; // Modifiez cette valeur pour ajuster l'espacement entre les requins
    
        // Afficher les requins
        s1.style.display = "block";
        s2.style.display = "block";
        s3.style.display = "block";
        s4.style.display = "block";
        s5.style.display = "block";
        s6.style.display = "block";
    
        // Appliquer les animations en définissant leur position finale avec la transition
        s1.style.left = (posl - distance * 2) + "px";  // Premier requin à gauche
        s2.style.left = (posl - distance) + "px";      // Deuxième requin à gauche
        s3.style.left = posl + "px";                   // Troisième requin à la position initiale
        s4.style.left = (posl + distance) + "px";      // Quatrième requin à droite
        s5.style.left = (posl + distance * 2) + "px";  // Cinquième requin plus à droite
        s6.style.left = (posl + distance * 3) + "px";  // Sixième requin encore plus à droite
    
        // Appliquer un léger décalage vertical (top) pour que les requins soient également écartés verticalement
        s1.style.top = (post - distance) + "px"; // Le premier requin va légèrement plus haut
        s2.style.top = (post - distance) + "px"; // Le deuxième requin un peu plus haut
        s3.style.top = post + distance + "px"; // Le troisième requin reste au niveau de départ
        s4.style.top = (post + distance / 2) + "px"; // Le quatrième requin un peu plus bas
        s5.style.top = (post + distance*-1) + "px"; // Le cinquième requin plus bas
        s6.style.top = (post + distance * 2) + "px"; // Le sixième requin encore plus bas
    }
    

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function createRotationAnimation(duration, timingFunction, angle) {
        const style = document.createElement("style");
        document.head.appendChild(style);
    
        const keyframes = `
            @keyframes rotateLogo {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(${angle}deg);
                }
            }
        `;
        
        style.sheet.insertRule(keyframes, 0);
    
        im1.style.animation = `rotateLogo ${duration}s ${timingFunction} infinite`;
    }
    

