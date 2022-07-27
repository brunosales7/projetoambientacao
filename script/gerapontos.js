function gerarPontos(){
    var pontoGerado = Math.random();
    document.getElementById("pontos").innerHTML= pontoGerado;



    var login = window.sessionStorage.getItem('login');
    document.getElementById("login").innerHTML = login; 
}