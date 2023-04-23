let button = document.getElementById('button');

button.addEventListener('click', () => {
  let div = document.getElementById('result');
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email');
  let telefone = document.getElementById('telefone');
  let genero = document.getElementById('genero');

  let textInteresse = "";
  let interesse = document.getElementsByName('interesse');
  for (let i = 0; i < interesse.length; i++) {
    if (interesse[i].checked) {
      interesse = interesse[i].value;
    }
  }

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
  
  div.style.fontSize = "1.6em";

  let toString = "Nome: " + nome + "<br> Email: " + email.value + "<br> Telefone: " + telefone.value + "<br> Gênero: " + genero.value + 
  "<br> Data de Nascimento: " + dataNascimento + "<br> Idade: " + idade + "<br> Interesse: " + interesse + "<br> Conteúdos de interesse: " + textCheckBoxes;

  if (idade < 18) {
    div.style.backgroundColor = "rgb(255, 0, 0)";
    div.innerHTML = "Desculpe, mas você não tem idade suficiente para se cadastrar no Tuiter."
  
  } else if (idade >= 18 && idade <= 25) {
    acessoAosConteudos = "Você tem idade suficiente para se cadastrar no Tuiter, mas infelizmente não terá acesso a todos os conteúdos, pois você é menor de 25 anos."
    div.innerHTML = "Olá, obrigado por se juntar a nós " + nome + ", é um imenso prazer te-lo por aqui. " + acessoAosConteudos + 
    " <br> Aqui no Tuiter nosso foco é oferecer os melhores conteúdos de sua preferência, reparei que possui interesse em " + textCheckBoxes + " você terá acesso " +
    "a todos esses conteúdos e muito mais, mas lembrando, tudo de acordo com sua idade. <br><br>" + toString;

  } else if (idade > 25) {
    acessoAosConteudos = "Legal você tem idade suficiente para se cadastrar no Tuiter e terá acesso a todos os conteúdos.";
    div.innerHTML = "Olá, obrigado por se juntar a nós " + nome + ", é um imenso prazer te-lo por aqui. " + acessoAosConteudos + 
    " <br> Aqui no Tuiter nosso foco é oferecer os melhores conteúdos de sua preferência, reparei que possui interesse em " + textCheckBoxes + " você terá acesso " +
    "a todos esses conteúdos e muito mais. <br> Vimos que possui interesse em " + interesse + ", tenho certeza que "+
    "encontrará o que procura. <br><br>" + toString;

  }


});