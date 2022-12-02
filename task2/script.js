const consoleLog2 = document.querySelector('#consoleLog');
   // querySelector - для поиска элемента веб-страницы
   // тело обработчика
   consoleLog2.addEventListener('click', function() {
      console.log('Служит для вывода информации в консоль')
   // конец тела обработчика
})

const alert2 = document.querySelector('#alert');
   // тело обработчика
alert2.addEventListener('click', function() {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK.')
   // конец тела обработчика
})

const prompt2 = document.querySelector('#prompt');
   // тело обработчика
   prompt2.addEventListener('click', function() {
    prompt('Показывает диалоговое окно с запросом на ввод текста')
   // конец тела обработчика
})
