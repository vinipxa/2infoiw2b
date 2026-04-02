const nome = document.getElementById('nome') 
const senha = document.querySelector('#senha') 
const avisoNome = document.querySelector('#avisoNome') 
const avisoSenha = document.querySelector('#avisoSenha') 
const form = document.querySelector('.formLogin') 
 
const entradas = document.querySelectorAll('input') 
 
 
form.addEventListener('submit', (e) => { 
    let enviarForm = true 
 
    if(!nome.value){ 
        avisoNome.innerHTML = "Preencha o campo nome"; 
        entradas[0].classList.add('avisoVermelho') 
        enviarForm = false 
    }else if(nome.value.length < 3){ 
        entradas[0].classList.add('avisoVermelho'); 
        avisoNome.innerHTML = "O nome deve ter no minimo 3 caracteres"; 
        enviarForm = false 
    }else{ 
        avisoNome.innerHTML = ""; 
        entradas[0].classList.remove('avisoVermelho') 
    } 
    if(!senha.value){ 
        avisoSenha.innerHTML = "Preencha o campo senha"; 
        entradas[1].classList.add('avisoVermelho') 
        enviarForm = false 
    }else if(senha.value.length < 8){ 
         
        avisoSenha.innerHTML = "A senha deve ter no minimo 8 caracteres"; 
        entradas[1].classList.add('avisoVermelho') 
        enviarForm = false 
    }else{ 
        avisoSenha.innerHTML = ""; 
        entradas[1].classList.remove('avisoVermelho') 
    } 
 
    if(!enviarForm){ 
        e.preventDefault() 
    } 
     
}) 

function uga(event){
    event.preventDefault(); // impede o reload

    const names = ['Daniel', 'Leonardo', 'Rogério'];
    const nome = names[Math.floor(Math.random() * names.length)];

    document.getElementById('ide').innerHTML = `Seu nome é ${nome}?`;
}