let button = document.getElementById('button');

button.addEventListener('click', () => {
  let div = document.getElementById('result');
  let nome = document.getElementById('nome').value;
  let nota1 = document.getElementById('nota1').value;
  let nota2 = document.getElementById('nota2').value;
  let nota3 = document.getElementById('nota3').value;
  let nota4 = document.getElementById('nota4').value;

  let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;

  if (media >= 6.0) {
    div.style.backgroundColor = "rgb(0, 255, 0)";
    div.innerHTML = "Parabéns " + nome + ", você foi aprovado com média " + media + ".";
  } else if (media >= 2.1 && media <= 5.9) {
    div.style.backgroundColor = "rgb(0, 0, 255)";
    div.innerHTML = nome + ", você está de recuperação com média " + media + ".";
  } else if(media < 2.0) {
    div.style.backgroundColor = "rgb(255, 0, 0)";
    div.innerHTML = nome + ", você foi reprovado com média " + media + ".";
  };
});