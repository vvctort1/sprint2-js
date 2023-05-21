


const botao = document.querySelector("#btnEnter");




botao.addEventListener("click", ()=>{

        const inputUser = document.querySelector("input[type='user']")
        const inputPassword = document.querySelector("input[type='password']")

        const labelUser = document.querySelector("label[for='idUser']")
        const labelPassword = document.querySelector("label[for='idPassword']")

        const erro = document.querySelector(".mensagemErro")

        const form = document.querySelector("form[action='home_page.html']")

        if(inputUser.value.length < 4){
            alert("Usuário deve possuir 4 ou mais caracteres!")
            form.onsubmit = "return false"
            labelUser.setAttribute("style","color:#ff0000")
        }
        
})



// function IsEmail(email){
//     var exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
//     var check=/@[w-]+./;
//     var checkend=/.[a-zA-Z]{2,3}$/;
//     if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}
//     else {return true;}
// }