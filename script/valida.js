/*
A função é um trecho de codigo (algoritmo) que realiza
uma tarefa específica

*/

/*
1º - Na função validar() recebe os valores das tags input html
*/

function validar(){
    // 1º- Declarar variáveis
    //O tipo é implícito
    //JS é fracamente tipada
    
    var login;
    var senha;

    //Pegar o elemento = e a <tag>(id)

    login = document.getElementById ("login").value; //Document = chamar os elementos que e o (id)
    senha = document.getElementById ("senha").value;//
    if(login === ''){
        alert("Login obrigatorio");
        return false;
    }else if (senha === ''){
        alert("senha obrigatória");
        return false;
    }else{
        return true;
    }



};