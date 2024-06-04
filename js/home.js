var i = 1;

window.onload = () => {

    if (i === 1) {
       document.getElementById("carsImage").innerHTML = '<img src="../assets/car1.png" alt="image">';
       document.getElementById("carsName").innerHTML = "<div>Porsche 718 Cayman</div>";
    } else if (i === 2) {
        document.getElementById("carsImage").innerHTML = '<img src="../assets/car2.png" alt="image">';
        document.getElementById("carsName").innerHTML = "<div>Mini Cooper 2025 2 Door Hatchback</div>";
    } else if (i === 3) {
        document.getElementById("carsImage").innerHTML = '<img src="../assets/car3.png" alt="image">';
        document.getElementById("carsName").innerHTML = "<div>Audi R8 Spyder</div>";
    } else if (i === 4) {
        document.getElementById("carsImage").innerHTML = '<img src="../assets/car4.png" alt="image">';
        document.getElementById("carsName").innerHTML = "<div>Ferrari F40 Liberty Walk</div>";
    } else {
        i = 1
    }
}

function nextimg() {
    if (i >= 4) {
        i = 1;
    } else {
        i = i + 1;
    }
    window.onload()
}

function previmg() {
    if (i <= 1) {
        i = 4;
    } else {
        i = i - 1;
    }
    window.onload()
}