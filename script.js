/**
 * 1.Schimbarea Textului:
 * Selectează un element din DOM și schimbă conținutul textului acestuia.
 */

const div = document.querySelector('div');
div.textContent = 'This was added with JS';

/**
 * 2.Modificarea Stilurilor:
 * Schimbă culoarea de fundal a unui element și mărimea fontului folosind doar cod 
 * JavaScript.
 */

document.getElementById('exercise-2').style.color = 'blue';

/**
 * 3.Adăugarea de Elemente:
 * Creează un element nou (de exemplu, un paragraf sau o imagine) și adaugă-l 
 * într-un container existent.
 */
const newP = document.createElement('p');
newP.textContent = 'Added new';
document.getElementById('exercise-3').appendChild(newP);

/**
 * 4.Ștergerea Elementelor:
 * Identifică un element și șterge-l din DOM.
 */
document.getElementById('to-delete').remove()

/**
 * 5.Manipularea Listelor:
 * Adaugă un nou element la o listă existentă.
 */
const newLi = document.createElement('li');
newLi.textContent = 'Item 4';
document.querySelector('#exercise-5 > ul').appendChild(newLi);

/**
 * 6.Evenimente și Alerte:
 * Atașează un event listener la un buton și afișează un mesaj 
 * de alertă atunci când butonul este apăsat.
 */
document.getElementById('show-alert').addEventListener('click', () => {
    alert('clicked');
})

/**
 * 7.Modificarea Atributelor:
 * Modifică valoarea atributului src al unei imagini sau href al unui link.
 */
const image = document.querySelector('#exercise-7 > img');
image.setAttribute('src', 'https://c02.purpledshub.com/uploads/sites/62/2023/01/Giant-panda-c2c51b8.jpg?w=1029&webp=1');

/**
 * 8.Toggle Ascundere/Afișare:
 * Atașează un event listener la un buton pentru a alterna între
 *  ascunderea și afișarea unui element.
 */
document.getElementById('toggle-message').addEventListener('click', () => {
    console.log('trigger');
    const target = document.getElementById('message');
    console.log(target);
    if (target.classList.contains('hide')) {
        console.log('contains');
        target.classList.remove('hide');
    } else {
        console.log('not');
        target.classList.add('hide');
    }
});

/**
 * 9.Validare Formular:
 * Creează un formular simplu și atașează un event listener 
 * pentru a valida câmpurile când formularul este trimis.
 */

document.getElementById('ex-9-form').addEventListener('submit', (ev) => {
    ev.preventDefault();
    const pass = document.getElementById('password');
    const confirmPass = document.getElementById('confirm-pass');
    if (pass.value !== confirmPass.value) {
        alert("Passwords don't match!");
    }
});