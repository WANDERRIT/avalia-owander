let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

function validarnome(){
    if (nome.value.length <3){
        alert ('Nome inválido, digite 4 caracteres ou mais')
    }
}
function validaremail(){
    let txtemail = document.querySelector ("#txtemail")
    if(email.value.indexOf("@")== -1){
        alert ("digitar caracteres de Email como '@' ")
    }

}
function validarassunto(){
   if (assunto.value,length <30){
   alert ("digitar mensagem acima de 30 caracteres")
   }
}