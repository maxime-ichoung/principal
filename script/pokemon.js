const buttonQRcode = document.getElementById('qrcode-button');
const popupQRcode = document.getElementById('popup-qrcode');

const pokemonNames = ["bulbizarre", "carapuce", "dinoclier", "dracolosse", "ectoplasma", "ferosinge", "galekid", "hericendre", "magicarpe", "mew", "mysterbe", "noctali", "pichu", "pikachu", "rondoudou", "sabelette", "salameche", "smogo", "togepi"];

buttonQRcode.addEventListener('click', () => {
    var srcLink = `./assets/${pokemonNames[Math.floor(Math.random() * pokemonNames.length)]}.png`;
    if (popupQRcode.children.length) {
        popupQRcode.children[0].src = srcLink;
    } else {
        const img = document.createElement("img");
        img.src = srcLink;
        img.width = 300;
        img.height = 300;
        popupQRcode.appendChild(img);
    }
  });
