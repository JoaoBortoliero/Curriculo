function meucallback(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
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
            limpaFormulario();
            alert("CEP inválido!");
        }
    } else {
        limpaFormulario();
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
