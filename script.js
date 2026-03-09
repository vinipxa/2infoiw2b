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
    }
};
