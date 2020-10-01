

var valor;
var resultado;
var percent; 
    
function botao(num){
try {

    if (valor <= num) {
        
    } else {
        
    }

} catch (valor) {
    console.error("Syntaxe Error");
}
    

}
function porcent(str){
        if (typeof str == 'num') return str;
    var nr;
    var virgulaSeparaDecimais = str.match(/(,)\d{2}$/);
    if (virgulaSeparaDecimais) num = str.replace(/\./g, '').replace(',', '.')
    else num = str.replace(',', '');
    return parseFloat(nr);
}
 
    function reseta(){

        document.calc.visor.value = " ";
    }

    function calcula(){
        resultado = eval(valor);
        document.calc.visor.value = resultado.toLocaleString('pt-br');


    }
    function visor(){
        alert("Deus nos abandonou");
    }
 