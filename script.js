let coisas = 0;
let passive_income = 0;

function circuloclicada(){
    coisas++;
}

function comprar(income,value){
    if (coisas >= value){
        coisas = coisas - value;
        passive_income += income;

    } else{
        warning_for_not_enough_money();
    }
}


setInterval(update_coisas, 100);

function update_coisas(){
    coisas += passive_income;
    document.getElementById('score').innerHTML = Math.floor(coisas) ;
}

let lista = [["coisa 1",0.1,10],["coisa 2",0.5,120],["coisa 3",2,1000]];
window.onload = function(){
    lista.map((x)=>{
        document.getElementById('aside_main').innerHTML += `<div class="botao_aside" onclick="comprar(${x[1]},${x[2]});"> ${x[0]} (${x[2]})</div>`;
    });
}