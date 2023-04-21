let button = document.getElementById('button');

button.addEventListener('click', () => {
  let div = document.getElementById('result');
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email');
  let telefone = document.getElementById('telefone');
  let genero = document.getElementById('genero');

  // let interesse = document.getElementById('interesse');
  // for (let i = 0; i < interesse.length; i++) {
  //   if (interesse[i].checked) {
  //       interesse = interesse[i].value;
  //   }
  // }

  let checkBoxes = document.querySelectorAll('input[type=checkbox]:checked');
    let textCheckBoxes = "";
    for (let i = 0; i < checkBoxes.length; i++) {
        textCheckBoxes = `${textCheckBoxes} ${checkBoxes[i].value},`;
    }

  let dataNascimento = document.getElementById('dataNascimento').value;
  dataNascimento = dataNascimento.split('-').reverse().join('/');
  let dataAtual = new Date();
  let anoAtual = dataAtual.getFullYear();
  let anoNascimento = dataNascimento.split('/')[2];
  let idade = anoAtual - anoNascimento;
  let acessoAosConteudos;

  if (idade < 18) {
  
    alert("Infelizmente você não tem idade suficiente para se cadastrar no Tuiter.");
    return;
  
  } else if (idade >= 18 && idade <= 25) {

    acessoAosConteudos = "Você tem idade suficiente para se cadastrar no Tuiter, mas infelizmente não terá acesso a todos os conteúdos, pois você é menor de 25 anos.";

    div.innerHTML = "Olá, obrigado por se juntar a nós " + nome + ", é um imenso prazer te-lo por aqui. " + acessoAosConteudos + 
    " <br> Aqui no Tuiter nosso foco é oferecer os melhores conteúdos de sua preferência, reparei que possui interesse em " + textCheckBoxes + " você terá acesso " +
    "a todos esses conteúdos e muito mais, mas lembrando, tudo de acordo com sua idade.";

  } else if (idade > 25) {

    div.className = "form";
    acessoAosConteudos = "Legal você tem idade suficiente para se cadastrar no Tuiter e terá acesso a todos os conteúdos.";

    div.innerHTML = "Olá, obrigado por se juntar a nós " + nome + ", é um imenso prazer te-lo por aqui, " + acessoAosConteudos + 
    " <br> Aqui no Tuiter nosso foco é oferecer os melhores conteúdos de sua preferência, reparei que possui interesse em " + textCheckBoxes + " você terá acesso " +
    "a todos esses conteúdos e muito mais.";
  }
  // deixca a pagina inteira vermelha como um truque escondido
  if (nome == "João" && email == "" && telefone == "" && dataNascimento == "11/11/1111" && genero == "Masculino" && checkBoxes == "") {
    document.body.style.backgroundColor = "red";
    div.className = "form";
  }
});