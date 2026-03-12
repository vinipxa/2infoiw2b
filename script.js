var num = 0
const pai = document.getElementById('pai')
const mae = document.getElementById('mae')
function sigma(){
    num = num + 1;
    console.log(num);
    mae.style.display = 'block';
    document.getElementById('irmao').innerHTML="DE NOVO!"
    if (num % 2 != 0) { 
        pai.innerHTML = "MELHOR PERSONAGEM"
        mae.src = '/streetfightervini/sakura.jpg' 
} else {
        pai.innerHTML = "SAKURA KASUGANO"
        mae.src = '/streetfightervini/sakura2.jpg' 
}
    if (num % 3 == 0){
        mae.style.display = 'none';
        pai.innerHTML = "NÃOOO!!"
        document.getElementById('irmao').innerHTML="Clique aqui para ver uma beldade"
    }
    if (!document.getElementById("botaoJunior")){
    const bu = document.createElement('button')
    bu.id = "botaoJunior"
    bu.innerText = "junior"
    bu.onclick = figma
    document.body.appendChild(bu)
}
};

    function figma(){
        var num1 = parseFloat(prompt("digita aqui:"));
        var num2 = parseFloat(prompt("os dois né:"));
        var resultado = num1 + num2;
       document.getElementById('botaoJunior').innerText= (resultado)
       window.print()
       if (!document.getElementById("botaoJr")){
    const but = document.createElement('button')
    but.id = "botaojr"
    but.innerText = "jr"
    but.onclick = pigma
    document.body.appendChild(but)
}
    }
function pigma(){
    var nomeAlunoEtec = "Vinição gostosão";
    var idadeAluno = 16;
    var alturaAluno = 1.80;
    var estudandteAluno = true;
}