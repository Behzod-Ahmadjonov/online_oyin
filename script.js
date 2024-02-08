let krotningHarakati;
let gulningHarakati;
let natija = 0;
let oyinYakunlandi = false;

window.onload = function() {
    oyinTuzilishi();
}

function oyinTuzilishi() {
    // o'yin maydonini sozlash
    for(let i = 0; i < 9; i++) {
        let harakat = document.createElement("div");
        harakat.id = i.toString();
        harakat.addEventListener("click", tanlashImkoni);
        document.getElementById("maydon").appendChild(harakat);
    }
    setInterval(krotTuzilish, 1000); // 1000 millisekund = 1 soniya
    setInterval(gulTuzilish, 2000); // 2000  millisekund = 2 soniya
}

function randomHarakat() {
    let raqam = Math.floor(Math.random() * 9);
    return raqam.toString();
}

function krotTuzilish() {
    if (oyinYakunlandi) {
        return;
    }
    if (krotningHarakati) {
        krotningHarakati.innerHTML = "";
    }
    let krot = document.createElement("img");
    krot.src = "./krot.png";

    let raqam = randomHarakat();
    if (gulningHarakati && gulningHarakati.id == raqam) {
        return;
    }
    krotningHarakati = document.getElementById(raqam);
    krotningHarakati.appendChild(krot)
}

function gulTuzilish() {
    if (oyinYakunlandi) {
        return;
    }
    if (gulningHarakati) {
        gulningHarakati.innerHTML = "";
    }
    let gul = document.createElement("img");
    gul.src = "./gul.png";

    let raqam = randomHarakat();
    if (krotningHarakati && krotningHarakati.id == raqam) {
        return;
    }
    gulningHarakati = document.getElementById(raqam);
    gulningHarakati.appendChild(gul);
}

function tanlashImkoni() {
    if(oyinYakunlandi) {
        return;
    }
    if(this == krotningHarakati) {
        natija += 10;
        document.getElementById("natija").innerHTML =
        natija.toString();
    }
    else if(this == gulningHarakati) {
        document.getElementById("natija").innerHTML = 
        "O'yin Yakunlandi: " + natija.toString();
        oyinYakunlandi = true;
    }
}
