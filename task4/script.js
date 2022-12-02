const currentUrl = document.querySelector('#currentUrl');
currentUrl.onclick = function(event){
const replacementUrl = prompt('Наберите новый текст для ссылки');
currentUrl.textContent = replacementUrl;
event.preventDefault()} // Команда, чтобы не было перехода по ссылке

// постоянный текущий URL = документ. селектор запросов ('# текущий URL-адрес');
// текущий URL. по клику = функция (событие) {
// const замена URl = prompt('Наберите новый текст для ссылок');
// текущий URL. текстовое содержимое = замена URL;
// мероприятие. предотвратить по умолчанию ()}


