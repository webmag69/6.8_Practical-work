const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeGreen);

// const Светофор Эл =документ.Селектор запроса ('# светофор');
// функция сделать зеленый() {
    // Светофор Эл. стиль. фон = ("зеленый");
    // Светофор Эл. удалить прослушиватель событий («щелкнуть», сделать зеленым);
     //светофорЭл. добавить прослушиватель событий («щелкнуть», сделать желтым);
// }
// Светофор Эл. добавить прослушиватель событий («щелкнуть», сделать зеленым);


