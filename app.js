'use strict';

const switcher = document.querySelector('.classe'); // Corrigido o nome da variável

switcher.addEventListener('click', function () {  // Corrigido 'addEventListener'
    document.body.classList.toggle('dark-theme'); // Corrigido a vírgula

    var classNome = document.body.className; // Corrigido 'bady' para 'body'
    
    if (classNome === 'light-theme') { // Correção de nome e comparação
        this.textContent = 'Dark';
    } else {
        this.textContent = 'Light';
    }

    console.log('Current class name: ' + classNome); // Corrigido 'ClassName' para 'classNome'
});
