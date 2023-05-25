let button = document.getElementById('btn');

button.addEventListener('click', () => {

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let nascimento = document.getElementById('nascimento').value;
    let senha = document.getElementById('senha').value;
    let cep = document.getElementById('cep').value;
    let uf = document.getElementById('uf').value;
    let logradouro = document.getElementById('rua').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let ibge = document.getElementById('ibge').value;

    let jsonSend =
    `{  "nome": "${nome}",
        "email": "${email}",
        "nascimento": "${nascimento}",
        "senha": "${senha}",
        "cep": "${cep}",
        "uf": "${uf}",
        "logradouro": "${logradouro}",
        "bairro": "${bairro}",
        "cidade": "${cidade}",
        "ibge": "${ibge}"
    }`
    
    alert(jsonSend);

});


    