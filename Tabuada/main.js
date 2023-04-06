const botao = document.getElementById('button1');
const resultado = document.getElementById('resultado');


botao.addEventListener('click', () => {
    const num = document.getElementById('num').value;
    if (num != 0 || num > 0) {
        for (let i = 1; i < 10; i++) {
            let texto = `${num} x ${i} = ${num * i} <br>`;
            resultado.innerHTML += texto;
        }
    } else {
        window.alert("O campo está vazio, Insira um valor!");
    }
});

const botao2 = document.getElementById('button2');
let contador = 0;

botao2.addEventListener('click', () => {
    contador++;
    document.getElementById('cliques').innerHTML = contador;
});
        

const botao3 = document.getElementById('button3');

botao3.addEventListener('click', () => {
    const min = document.getElementById('min').value;
    const max = document.getElementById('max').value;
    document.getElementById('rdn').innerHTML = Math.floor(Math.random(min) * max) + 1;
})
