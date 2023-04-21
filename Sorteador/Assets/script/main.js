const botao3 = document.getElementById('button3');

botao3.addEventListener('click', () => {
    const min = document.getElementById('min').value;
    const max = document.getElementById('max').value;
    document.getElementById('rdn').innerHTML = Math.floor(Math.random(min) * max) + 1;
})
