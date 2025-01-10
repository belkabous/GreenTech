const Name = document.getElementById("name");
const email = document.getElementById("email");
const sujet = document.getElementById("sujet");
const message = document.getElementById("message");
const submit = document.getElementById("sub");
const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
submit.addEventListener("click", ()=>{
    let result = 0;
    if(Name.value==""){
        alert('le nom est vide');
    }else if (Name.value.length < 3){
        alert("le nom est court");
    }else{
        result = result + 1;
    }

    if(sujet.value ==""){
        alert('ecrire le sujet de votre message');
    }else if (sujet.value.length < 5){
        alert('le sujet est court');
    }else{
        result = result + 1;
    }

    if(message.value==""){
        alert('ecrire un message ');
    }else if(message.value.length < 10){
        alert('votre message est court');
    }else{
        result = result + 1;
    }

    if(email.value==""){
        alert('entrez votre email')
    }else if(!isValid.test(email.value)){
        alert('votre email non valider');
    }else{
        result = result + 1;
    }
     if(result == 4){
        alert('formuaire valider');
     }

})
function ygy(){

}