// Tu código aquí.

//Hecho con inline styling

// let counter = 0;

// const prevBtn = document.querySelector('.prevBtn')
// const nextBtn = document.querySelector('.nextBtn')
// const counterDisplayed = document.querySelector('#counter')

// const updateCounter = (count) => {
//     if (count > 0) {
//         counterDisplayed.style.color = "green";
//         counterDisplayed.textContent = count;
//         console.log('green')
//     } else if (count === 0) {
//         counterDisplayed.style.color = "grey";
//         counterDisplayed.textContent = count;
//         console.log('grey')
//     } else {
//         counterDisplayed.style.color = "red";
//         counterDisplayed.textContent = count;
//         console.log('red')
//     }
// }

// prevBtn.addEventListener('click', () => {
//     counter--;
//     updateCounter(counter)
// })
// nextBtn.addEventListener('click', () => {
//     counter++;
//     updateCounter(counter)
// })



let counter = 0;

const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
const counterDisplayed = document.querySelector('#counter')

const updateCounter = (count) => {
    if (count > 0) {
        counterDisplayed.classList.remove('grey', 'red')
        counterDisplayed.classList.add('green')
        counterDisplayed.textContent = count;
        console.log('green')
    } else if (count === 0) {
        counterDisplayed.classList.remove('green', 'red')
        counterDisplayed.classList.add('grey');
        counterDisplayed.textContent = count;
        console.log('grey')
    } else {
        counterDisplayed.classList.remove('grey', 'green')
        counterDisplayed.classList.add("red");
        counterDisplayed.textContent = count;
        console.log('red')
    }
}

prevBtn.addEventListener('click', () => {
    counter--;
    updateCounter(counter)
})
nextBtn.addEventListener('click', () => {
    counter++;
    updateCounter(counter)
})