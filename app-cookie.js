const boasVindas = document.querySelector('h1');
const btn = document.querySelector('button');

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(nomeCookie) {
    let nome = getCookie(nomeCookie);
    if (nome != "") {
        //alert("Welcome again " + nome);
        boasVindas.innerText = `Boas vindas ${nome}`;
        console.log('ta logado')
       //  window.location.href = "home.html"
    } else {
       // nome = prompt("Please enter your name:", "");
        //if (nome != "" && nome != null) {
          //  setCookie("nome", nome, 365);
          console.log('naão logado')
          window.location.href = "index.html"
        }
    }


    btn.addEventListener("click",()=>{
            console.log('click')
        
            document.cookie = `nome=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            location. reload()
    })

    document.cookie = "nome-do-cookie=valor-do-cookie; secure; HttpOnly; path=/";

    checkCookie('nome')
    //https://pt.stackoverflow.com/questions/3312/como-redirecionar-o-usu%C3%A1rio-para-outra-p%C3%A1gina-em-javascript-jquery
    //https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie