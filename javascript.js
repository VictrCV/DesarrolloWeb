document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel', '.materialboxed');
    var instances = M.Carousel.init(elems, {
        padding: 100
    });

    var instances = M.Materialbox.init(elems, options);

});

var topButtom = document.getElementById("topButton");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function lema(casa){
    switch (casa){
        case "targaryen":
            alert("«Fuego y Sangre»");
    }
}

function ups(){
    alert("¡Ups! Aún no se ha implementado la página de esta casa. Prueba seleccionar la casa Targaryen uwu");
}

function getStars(){
    $.get("https://api.github.com/repos/VictrCV/DesarrolloWeb", (data, status) => {
        document.getElementById("stars").innerHTML = data.stargazers_count;
    });
}

window.onload = function () { getStars() };