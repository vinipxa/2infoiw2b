var num = 0
function sigma(){
    num = num + 1;
    console.log(num)
    if (num % 2 != 0) {
    document.getElementById(1).innerHTML = '<p>melhor personagem</p> <img id="sybau" src="/streetfightervini/sakura2.jpg">'    
} else {
    document.getElementById(1).innerHTML = '<p>melhor personagem</p> <img id="sybau" src="/streetfightervini/sakura.jpg">'      
}
}
