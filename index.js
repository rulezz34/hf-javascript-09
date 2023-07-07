// 1. Hozz létre egy html fájlt, amibe rakj bele egy <p>-t, és irasd ki a <p>-be a kurzor aktuális pozícióját.
// Ha rákattintasz a <p>-re, akkor hagyja abba a <p> frissítését, ha rákattintasz újra, akkor kezdje el ismét kiírni az aktuális pozícióját a kurzornak!

let update = true;

let mousePosition = document.querySelector('#mousePosition');

function toggleUpdate() {
    if (update === true) {
        update = !update;
    } else {
        update = true;
    }
    console.log(update);
}

function displayCursor(event) {
    if (update) {
        mousePosition.innerText = "X Koordináta: " + event.clientX + " Y Koordináta: " + event.clientY;
    }
}

mousePosition.addEventListener('click', toggleUpdate);
document.addEventListener('mousemove', displayCursor);


// 2. Hozz létre egy html fájlt, amiben 5 mp múlva írjon ki egy alert-et a mai dátummal!

setTimeout(function () {
    var currentDate = new Date();
    alert("Mai dátum: " + currentDate.toDateString());
}, 5000);

// 3. Hozz létre egy órát egy html fájlban! (Egy szimpla <p> tag-be is beleírhatod az aktuális időpontot, csak a lényeg, hogy mindig frissüljön)


function displayTime() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    document.querySelector("#clock").innerHTML = time;
}

setInterval(displayTime, 500);

// 4. Hozz létre egy reakciómérőt! A html - ben 2 mp múlva jelenjen meg egy gomb random helyen(a gomb szélessége és magassága legyen 60px).Ha lenyomjuk, akkor 1 mp múlva jelenjen meg ismét, egy másik random helyen, összesen 5x(az első megjelenéssel együtt).Mérd meg az első megjelenés és az utolsó gombnyomás közötti időt.
// Protip használd a Date objektumot.
// Figyelj arra, hogy a gomb teljes egésze mindenképpen az oldalon belül helyezkedjen el.

function getRandomPosition() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let randomX = Math.floor(Math.random() * width);
    let randomY = Math.floor(Math.random() * height);

    return {
        x: randomX,
        y: randomY
    };
}

let counter = 1;
const button = document.querySelector("#reactionBtn");

function startBtnPosition() {
    const position = getRandomPosition();
    button.style.left = position.x + "px";
    button.style.top = position.y + "px";
    button.style.display = "block";
    counter++;
    console.log(counter);
}

function getBtnPosition() {
    const position = getRandomPosition();
    button.style.left = position.x + "px";
    button.style.top = position.y + "px";
    counter++;
}

setTimeout(startBtnPosition, 2000);

button.addEventListener('click', function clicking() {
    setTimeout(getBtnPosition, 1000);
    if (counter > 4) {
        button.removeEventListener('click', clicking);
        console.log(counter);
    }
})




// 5. Hozz létre egy html-t, amelybe van egy input, egy label-lel és egy gomb. Ha lenyomjuk a gombot, akkor az input-ban lévő szöveget mentsük el a localStorage-ban, majd tüntessük el az eddigi elemeket és jelenítsünk meg egy <p>-t a következő szöveggel:
// `Üdvözöllek ${bekért név}, milyen szép ${napszak} van!`
// A napszak a mostani időponttól (órától) függ:
// hajnal: 1-6, regggel: 6-9, délelőtt: 9-12, 12-16: délután, 16-18: késő délután, 18-21: este, 21-01: éjjel, hajnal: 1-6
// Az input-ban lévő szöveg hossza ha kisebb mint 3 és a user lenyomja a gombot, akkor ne fogadjuk el, ehelyett jöjjön fel egy alert ezzel a szöveggel: `Túl rövid név`

// Ha a user ismét meglátogatja a weboldalt és már van elmentve a localStorage-ban egy név, akkor ne kérje be ismét a nevet, hanem jelenítse meg a fentebb
// említett szöveget

// 6. Hozz létre egy html-t, amely kilistázza a csapatok nevét soronként. Ha rákattintasz egy csapatnak a nevére,
// akkor közvetlenül alatta jelenítse meg a csapat tagjait egy ORDERED list-ben pontszám alapján növekvő sorrendben.
// Pl.
// 1. András 12p
// 2. Ursula 11p
// 3. Károly 9p
// 4. Viktor 5p
// Ha rákattintasz ismét a csapat nevére, akkor pedig  - "csukja össze" - , tüntesse el a listát.
// Használd fel a teams.js-t az előző órákból!

// 7. Másold le a 6-os feladatban készített munkádat, és készítsd el úgy, hogy egyszerre maximum egy csapat lista lehet "nyitva".