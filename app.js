

const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3000/index.php', {
            method: 'GET',
            // Você pode adicionar mais opções de configuração aqui, como headers, etc.
        });

        if (!response.ok) {
            throw new Error('Erro na requisição');
        }

        const data = await response.json();
        console.log('Dados recebidos:', data);
        userBD.push(data[1])
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
};

fetchData();



/*
// array de usuario

let userBD = [{
    email: "email@email.com",
    senha: "1234"
}]
*/

let userBD = []

console.log(userBD)
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
//https://www.w3schools.com/js/js_cookies.asp
//https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
    let dados = new FormData(form)
    let emailUser = dados.get('email'); // Obtém o valor do campo de email
    let senhaUser =  dados.get('senha'); // Obtém o valor do campo de senha
    // faça a validação ou processamento adicional aqui
    console.log(userBD.email,userBD.senha)
    validarLogin(emailUser,senhaUser)
});

let validarLogin = (email,senha) => {
    if(userBD[0].email === email && userBD[0].senha === senha ){
        console.log('logado')
        setCookie('nome',email,7) 
        window.location.href = "home.html"
    }else{
        console.log('user não logado')   
        window.location.href = "index.html"
    }

}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";secure;path=/";
}

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

function checkCookie(cookie) {
    let nome = getCookie(cookie);
    if (nome != "") {
        window.location.href = "home.html"
    }
}

checkCookie("nome")

//document.cookie = "nome=choco";
//document.cookie = "sobrenome=strawberry";
//console.log(document.cookie);

//document.cookie = "nome=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

/*
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

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
===================================
A função setCookie que você forneceu é usada para definir cookies em JavaScript. Vamos analisar os parâmetros dessa função:

cname (nome do cookie): Este é o nome do cookie que você deseja definir. Ele deve ser uma string que representa o nome do cookie. Por exemplo, se você quiser criar um cookie chamado “username”, você passaria "username" como o valor para cname.
cvalue (valor do cookie): Este é o valor que você deseja associar ao cookie. Pode ser qualquer tipo de dado (string, número, booleano etc.). Por exemplo, se você quiser armazenar o nome de usuário “Alice”, você passaria "Alice" como o valor para cvalue.
exdays (duração do cookie em dias): Este parâmetro define por quanto tempo o cookie deve permanecer válido. Ele deve ser um número inteiro que representa o número de dias. Por exemplo, se você quiser que o cookie expire após 7 dias, você passaria 7 como o valor para exdays.
A função então calcula a data de expiração com base no número de dias fornecido e define o cookie com o nome, valor e data de expiração especificados.

Lembre-se de que os cookies são armazenados no navegador do usuário e podem ser acessados ou modificados pelo cliente. Portanto, evite armazenar informações sensíveis nos cookies, como senhas ou dados pessoais.

=================================

function checkCookie() {
    let nome = getCookie("nome");
    if (nome != "") {
        alert("Welcome again " + nome);
    } else {
        nome = prompt("Please enter your name:", "");
        if (nome != "" && nome != null) {
            setCookie("nome", nome, 365);
        }
    }
}

checkCookie()

*/