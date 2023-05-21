


const botao = document.querySelector("#btnEnter");




botao.addEventListener("click", ()=>{

        const inputUser = document.querySelector("input[type='user']")
        const inputPassword = document.querySelector("input[type='password']")

        const labelUser = document.querySelector("label[for='idUser']")
        const labelPassword = document.querySelector("label[for='idPassword']")

        const erro = document.querySelector(".mensagemErro")
        const form = document.getElementById('meuForm');
        
                if(inputUser.value.length < 4){
                    alert("Usuário deve possuir 4 ou mais caracteres!")
                    labelUser.setAttribute("style","color:#ff0000")
                    form.addEventListener('submit', function(event) {
                      event.preventDefault();
                    });
                }
                else{
                    const form = document.getElementById('meuForm');
                    form.addEventListener('submit', function() {
                      return true;
                      });
                }


            })



// function IsEmail(email){
//     var exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
//     var check=/@[w-]+./;
//     var checkend=/.[a-zA-Z]{2,3}$/;
//     if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}
//     else {return true;}
// }