const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', ()=>{
    console.log('pressed');
    const colors = randomRGB();
    document.body.style.background = colors;
    h1.innerText = colors;
})

function randomRGB() {
    const red = Math.floor(Math.random()* 255) + 1;
    const green = Math.floor(Math.random()* 255) + 1;
    const blue = Math.floor(Math.random()* 255) + 1;

    return `rgb(${red}, ${green}, ${blue})`;
}

