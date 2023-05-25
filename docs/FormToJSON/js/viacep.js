function meucallback(conteudo) {
    if(!("erro" in conteudo)){
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('estado').value = (conteudo.uf);
        document.getElementById('ibge').value = (conteudo.ibge);
    }
}

function pesquisaCep(valor) {
    let cep = valor.replace(/\D/g, '');
    if (cep != ""){
        let validaCep = /^[0-9]{8}$/;

        if(validaCep.test(cep)){
            let script = document.createElement('script'); 
            script.src = "http://viacep.com.br/ws/"+cep+"/json/?callback=meucallback";
            document.body.appendChild(script);
        } else {
            // limpaFormulario();
            alert("CEP inválido!");
        }
    } else {
        // limpaFormulario();
    }
}

function limpaFormulario() {
    document.getElementById('cep').value = ("");
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
    document.getElementById('ibge').value = ("");
}

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {

    let jsonSend =
    `{  "nome": "${document.getElementById('nome').value}",
        "email": "${document.getElementById('email').value}",
        "nascimento": "${document.getElementById('nascimento').value}",
        "senha": "${document.getElementById('senha').value}",
        "uf": "${document.getElementById('estado').value}",
        "cep": "${document.getElementById('cep').value}",
        "logradouro": "${document.getElementById('rua').value}",
        "bairro": "${document.getElementById('bairro').value}",
        "cidade": "${document.getElementById('cidade').value}",
        "ibge": "${document.getElementById('ibge').value}"
    }`
    alert(jsonSend);
});